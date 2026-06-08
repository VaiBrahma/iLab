import { useEffect, useState } from "react";
import React from "react";
import gen, { fSmInt, objSmInt } from "./GenerateInt";
import "./Interpreter.css";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";
import LooksFine from "../EverythingFine/LooksFine";

const SmartInterpreter = () => {
  const p = useSelector((state) => state.data);
  const data = p.data[1];

  if (data === undefined ) {
    window.location.href = window.location.origin;
    return <Loading />;
  }

  const [result, setResult] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isFine, setIsFine] = useState(false);

  const arr = [];
  for (let i = 0; i < data?.length; i++) {
    for (let j = 0; j < data[i].test_values.length; j++) {
      if (data[i].test_values[j].is_highlighted) {
        arr.push(data[i].test_values[j]);
      }
    }
  }
  const res = [];
  for (let i = 0; i < Math.min(15, arr.length); i++) {
    if (arr[i]?.lower_bound == "-" || arr[i]?.lower_bound == "") {
      continue;
    }
    if (arr[i].parameter_value < arr[i].lower_bound) {
      res.push(["deficiency", arr[i].parameter_name]);
    } else if (arr[i].parameter_value > arr[i].upper_bound) {
      res.push(["High level", arr[i].parameter_name]);
    } else {
      res.push(["", arr[i].parameter_name]);
    }
  }

  useEffect(() => {
    if (arr.length === 0) {
      setIsFine(true);
    }
    async function fetchData() {
      if (fSmInt === 0 && arr.length > 0) {
        const obj = await gen(res);
        setResult(obj);
        setLoading(false);
      } else {
        const obj = objSmInt;
        setResult(obj);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  let i = 0;
  if (!data) {
    window.location.href = window.location.origin;
    return <Loading />;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isFine ? (
        <LooksFine />
      ) : (
        <div className="containerSmartI">
          <h1 className="h1SmartInt">Smart Interpreter</h1>
          {data.map((tests) => {
            return (
              <div key={tests.__id}>
                {tests.test_values.map((test) => {
                  return (
                    <div key={test.test_parameter_id}>
                      {test.is_highlighted && result[i] ? (
                        <fieldset className="IntContainer">
                          <legend className="IntH1">{tests.test_name}</legend>
                          <div className="IntTestDes">
                            <div>
                              <h3 style={{ margin: "0px" }}>
                                {test.parameter_name}
                              </h3>
                              <h5 style={{ margin: "0px", marginTop: "5px" }}>
                                Method: {test.test_method}
                              </h5>
                            </div>

                            <div>
                              <h4 style={{ margin: "0px", fontWeight: "800" }}>
                                {test.parameter_value}
                                {test.unit != "-" ? test.unit : ""}
                              </h4>
                              <br></br>
                            </div>
                            <div>
                              <h4
                                style={{
                                  margin: "0px",
                                  fontWeight: "600",
                                  textDecoration: "underline",
                                  display: "inline",
                                }}
                              >
                                {test.impression === "L"
                                  ? "Deficiency"
                                  : test.impression === "H"
                                  ? " Abnormally high level "
                                  : ""}
                              </h4>
                              <span>
                                {test.lower_bound != "-"
                                  ? `: ${test.lower_bound}-${test.upper_bound}`
                                  : ""}
                              </span>
                            </div>
                          </div>
                          <div className="InterpretedPara">
                            {result[i++]?.detail}
                          </div>
                        </fieldset>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default React.memo(SmartInterpreter);
