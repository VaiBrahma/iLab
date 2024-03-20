import React, { useEffect, useState } from 'react'
import "./home.css"
import Forms from '../Forms/Forms'
import readXlsxFile from 'read-excel-file'
import axios from 'axios'



 const  Home = () => {

  const [booking_id, setBooking_id] = useState();
  const [isFormNeeded, setIsFormNeeded] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isValidBookingId, setIsValidBookingId] = useState(false);
  const [focused, setFocused] = useState(false);
  const [formData, setFormData] = useState([{}]);
  const [flag1, setFlag1] = useState(false);

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
  
  const [flag, setFlag] = useState(false);

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
      if(response.data === 7) {
        setIsFormNeeded(false);
      }
      setFormData([{}]);

      console.log(response.data);
    }
    catch(error){
      console.error('Error saving data:', error);
    }
  }
  
  return (
    // <div className='background absolute w-[100vw] h-screen'>
    //     <div className='relative top-0 left-0 m-2 w-40 h-16 logo'></div>
    //     <h1>SmartLab</h1>
    //     <div className='filter h-[80vh] grid grid-col-1 sm:grid-cols-3 gap-2 m-2'>
    //         <div className=' flex justify-center items-center sm:col-span-2 bg-sky-700 h-[500px] rounded-xl bg-opacity-40'>
    //             <Forms/>
    //         </div>
    //         <div className='flex justify-center items-center'>
    //             A Smart and fast way to create lab reports:
    //             <br />
    //             home page ki design main nahi karoonga
    //             <br />
    //             -vaibhav

    //         </div>
    //     </div>
    // </div>

    <div className='bg-white flex flex-col sm:flex-row'>
      <div className='  h-screen w-[100vw] sm:w-[50%] flex justify-center items-center '>
        <div className='w-[80%] h-screen'>
          <div className=' flex-col h-full flex justify-center'>
            <div className=''>
              <img src="/logos/logo.svg" alt="no-image" className='h-[4rem] mb-8'/>
              <h1 className='text-[2.6rem] min-w-[304px] font-bold text-left'>YOUR SMART</h1> 
              <h1 className=' text-[2.6rem] min-w-[304px] font-bold text-left'>HEALTH REPORT</h1> 
{/*  */}
                <form onSubmit={handleSumbit} className='flex flex-col'>
                    {/* <h2 className='text-center text-3xl font-bold text-[#0077B5]'>Get your LabReport</h2> */}
                    <label className=' text-[#000000CC] text-[0.9rem] mt-4'>Input Booking ID</label>

                    <div className='flex  justify-center relative'>
                      <div className=' w-[70%]'>
                        <input className=' p-2 my-2 h-[2.5rem] w-full mb-4 rounded-md text-[#231919c8]' required='true' placeholder='Enter Booking ID' maxLength='7' id='booking_id' type='text' name='booking_id' value={booking_id} onChange={handleInputChange} pattern='^\d{7}$' onBlur={()=> setFocused(true)} focused={focused.toString()}/>
                        <span className='hidden text-[#FF0000] text-sm mb-2 relative bottom-2'>booking_id must be unique and it must contains only 7 digits</span>
                      </div>
                      <button type='submit' className=' bg-[#0E7F6B] w-[30%] relative h-10 min-w-[83px] font-bold top-[4px] rounded-md text-sm hover:bg-[#0b6a59] active:scale-110 transition-all m-1 text-[#FFFFFF] p-1  shadow-md'>Get Report</button>
                    </div>
                </form>
{/*  */}      
                <div>
                  <button className='hover:bg-[#0e7f6a2a] bg-[#0E7F6B1A] rounded-xl h-[2.5rem] mt-2 text-[#0E7F6B] flex items-center justify-center   hover:shadow-none active:shadow-md w-full active:scale-[1.05] transition-all' onClick={()=>setFlag1(!flag1)}>Upload Patient Data</button>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ilabrepeated  h-screen w-[100vw] sm:w-[50%] flex justify-center items-center'>
        <div className='h-[65%] rounded-2xl border-[1.1rem] border-white'>
          <img src="/home/doctors.png" alt="no-image" className='h-full rounded-2xl'/>
        </div>
      </div>
{/* upload xlsx */}
      {flag1 && <div  className='absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 backdrop-blur-sm '>
        <div className='relative bg-white h-[12rem] w-[18rem] sm:w-[26rem]  flex justify-center items-center rounded-xl'>
        <button className='absolute top-2 right-2 text-black w-4 h-4 x' onClick={()=>setFlag1(!flag1)}>X</button>
          {isFormNeeded && 
          <form onSubmit={handleSumbit1} className=' w-[80%]'>
              <h1 className='font-bold text-xl my-4'>Upload Patinet Report</h1>
              <label className=' text-[#000000CC] text-[0.9rem] relative top-2 mt-4'> Upload .xlsx file </label>
              <div className='flex justify-center items-center'>
                <input className='border-none relative top-2 w-[70%]' type="file" onChange={handleFileChange} accept='.xlsx'/>
                <button type='submit' className=' bg-[#0E7F6B] w-[30%] relative h-10 min-w-[83px] font-bold top-[4px] rounded-md text-sm hover:bg-[#0b6a59] active:scale-110 transition-all m-1 text-[#FFFFFF] p-1  shadow-md'>Submit</button>
              </div>
          </form>
        
          }
          {
            !isFormNeeded && (<div>
              <p>Patient Data is Submitted</p>
            </div>)
          }
      
      </div>
      </div> }
    </div>
  )
}

export default Home
