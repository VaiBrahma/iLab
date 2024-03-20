import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addData } from "../../store/dataSlice";
import Loading from "../../component/loading/Loading";
import genVis from "../../component/visuallyAided/generativeAi";
import gen from "../../component/smartInterpreter/GenerateInt";
import aiGeneratedForSmartIntSlice, {
  addAiGeneratedForSmartInt,
} from "../../store/aiGeneratedForSmartIntSlice";
import { addAiGeneratedForVis } from "../../store/aiGeneratedForVisSlice";
import CoverPage from "../coverpage/CoverPage";
import Error from "../../component/error/Error"
// export var isResEmpty = false;
const Welcome = () => {
  const booking_id = window.localStorage.getItem("booking_id");
  const dispatch = useDispatch();

  const [isLoading1, setIsLoading1] = useState(true);
  const [flag, setFlag] = useState(false);
  // const [isLoading2, setIsLoading2] = useState(true);
  // const [isLoading3, setIsLoading3] = useState(true);

  const [data, setData] = useState(null);

  //for DATA
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`https://ilab-mk18.onrender.com/api/healthData?booking_id=${booking_id}`)
        .then((response) => {

          console.log(response)
          // if (response.status === 404) {
          //   setFlag(true);
          // }

          dispatch(addData(response.data));
          setData(response.data);
        })
        .catch((error) => {
          setFlag(true);
          console.log(error);
        })
        .finally(setIsLoading1(false));
    }

    fetchData();
  }, [booking_id, dispatch]);

  //for Visually Aid and Smart Interpreter
  // useEffect(() => {
  //   async function updateVis(data) {
  //     const arr = [];
  //     for (let i = 0; i < data?.length; i++) {
  //       for (let j = 0; j < data[i].test_values.length; j++) {
  //         if (data[i].test_values[j].is_highlighted) {
  //           arr.push(data[i].test_values[j]);
  //         }
  //       }
  //     }
  //     const res = [];
  //     for (let i = 0; i < Math.min(15, arr.length); i++) {
  //       if (arr[i]?.lower_bound == "-" || arr[i]?.lower_bound == "") {
  //         continue;
  //       }
  //       if (arr[i].parameter_value < arr[i].lower_bound) {
  //         res.push(["deficiency", arr[i].parameter_name]);
  //       } else if (arr[i].parameter_value > arr[i].upper_bound) {
  //         res.push(["High level", arr[i].parameter_name]);
  //       } else {
  //         res.push(["", arr[i].parameter_name]);
  //       }
  //     }
  //     // await genVis(res)
  //     //   .then((response) => {
  //     //     // console.log('para1 is: ', response)
  //     //     dispatch(addAiGeneratedForVis(response));
  //     //   })
  //     //   .catch((err) => {
  //     //     throw err;
  //     //   })
  //     //   .finally(() => setIsLoading2(false));

  //     // await gen(res)
  //     //   .then((res) => {
  //     //     // console.log('para2 is: ', res)
  //     //     dispatch(addAiGeneratedForSmartInt(res));
  //     //   })
  //     //   .catch((err) => {
  //     //     throw err;
  //     //   })
  //     //   .finally(() => setIsLoading3(false));
  //   }

  //   updateVis(data);
  // },[]);


  return (
    <>
      {isLoading1 && <Loading/>}
      {!isLoading1 && flag && <Error/>}
      {!isLoading1 && !flag && <CoverPage/>}
    </>
  );
};

export default Welcome;
