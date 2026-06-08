import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import LabReport from '../../component/labReport/LabReport';
import { addData } from '../../store/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../component/loading/Loading';
import readXlsxFile from 'read-excel-file'
import './Forms.css'

const Forms = () => {
  const [booking_id, setBooking_id] = useState();
  const [isFormNeeded, setIsFormNeeded] = useState(true);
 
  const handleSumbit = (e) => {
    e.preventDefault();

    if(booking_id.toString().length == 7)
    setIsFormNeeded(false);
    
    setIsFormSubmitted(true);
    
    if (isValidBookingId) {
      
      window.localStorage.setItem('isLoggedIn', false);
      window.localStorage.setItem('booking_id', booking_id);

      location.reload();
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setBooking_id(value);
    setIsValidBookingId(value.match(/^\d{7}$/) !== null); // Check if the booking ID matches the pattern
  };

  useEffect(() => {
    if (!isFormNeeded) {
      window.localStorage.setItem('isLoggedIn', false);
      location.reload();
      
    }
  }, [isFormNeeded]);

  
  const [flag, setFlag] = useState(false);
  
  ////////////form1///////////

  const [flag1, setFlag1] = useState(false);

  const [formData, setFormData] = useState([{}]);

  

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    readXlsxFile(e.target.files[0]).then(dataArray => {
      const headers = dataArray[0];
      const jsonDataArray = dataArray.slice(1).map(row => {
        const obj = {};
        headers.forEach((header, index) => {
          obj[header] = row[index];
        });
        return obj;
      });
  
      jsonDataArray.forEach(obj => {
        obj.test_values = JSON.parse(obj.test_values);
      });
  
      const jsonData = jsonDataArray.map(obj => {
        // Check if _id property exists before excluding it
        if (obj._id) {
          const { _id, ...newObj } = obj;
          return newObj;
        }
        return obj;
      });
  
      setFormData(jsonData);
  
      console.log('jsonData is: ', jsonData);
    })
    .catch(err => console.log(err));
  }
  
  const handleSumbit1 = async(e)=>{
    e.preventDefault();

    try{
      const response = await axios.post('/api/save/saveData', formData);
      if(response.data === '7') {
        ()=>setIsFormNeeded(false);
      }
      setFormData([{}]);
    }
    catch(error){
      console.error('Error saving data:', error);
    }
  }

  const [focused, setFocused] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isValidBookingId, setIsValidBookingId] = useState(true);

  return (

    <div className='flex justify-center items-center h-full w-full'>
      <div className='border-4 flex flex-col justify-center items-center w-5/6 h-5/6 rounded-xl border-blue-700'>
          <button className=' bg-blue-700 rounded-xl m-2 text-gray-100 p-3  hover:shadow-none active:shadow-md w-full sm:w-2/4 active:scale-[1.05] transition-all' onClick={()=>setFlag1(!flag1)}>Post Data To API</button>
          <button className=' bg-blue-700 rounded-xl p-3 text-gray-100 m-2  hover:shadow-none active:shadow-md w-full sm:w-2/4 active:scale-[1.05] transition-all' onClick={()=>setFlag(!flag)}>Get iLab</button>
      </div>
      {flag &&
      (<div  className='absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-sm '>
        <div className='relative bg-white w-80 flex justify-center items-center p-8 rounded-xl'>
          <button className='absolute top-2 right-2 text-black w-4 h-4' onClick={()=>setFlag(!flag)}>X</button>
            {isFormNeeded && 
            <form onSubmit={handleSumbit} className='flex flex-col'>
                <h2 className='text-center text-3xl font-bold text-[#0077B5]'>Get your LabReport</h2>
                <label className=' text-gray-500 text-sm mt-4'>Booking id</label>
                <input className=' p-2 bg-gray-100 border my-2 mb-4 h-8 rounded-md text-gray-700' required='true' placeholder='Enter Booking Id' maxLength='7' id='booking_id' type='text' name='booking_id' value={booking_id} onChange={handleInputChange} pattern='^\d{7}$' onBlur={()=> setFocused(true)} focused={focused.toString()}/>
                <span className='hidden text-[#FF0000] text-sm mb-2 relative bottom-2'>booking_id must be unique and it must contains only 7 digits</span>
              <button type='submit' className=' bg-[#0077B5] rounded-md text-sm hover:bg-sky-600 active:scale-110 transition-all m-1 text-gray-100 p-1  shadow-md scale-105'>Submit</button>
            </form>
            }
        </div>
      </div>) }
      
      {/* ////////////form1//////////// */}

      {flag1 && (
        <div  className='absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-sm '>
          <div className='relative bg-white h-[7.4rem] w-80 flex justify-center items-center p-8 rounded-xl'>
          <button className='absolute top-2 right-2 text-black w-4 h-4' onClick={()=>setFlag1(!flag1)}>X</button>
            {isFormNeeded && 
            <form onSubmit={handleSumbit1}>
              <label>
                <h2>Enter Xlsx Lab Tests</h2>
                <input type="file" onChange={handleFileChange} accept='.xlsx'/>
              </label>
              <button type='submit' className=' bg-blue-700 rounded-md text-sm hover:bg-sky-600 active:scale-95 m-1 text-gray-100 p-1  shadow-md'>Submit</button>
            </form>
            }

        </div>
        </div>
      )}
    </div>
  )
}

export default Forms

