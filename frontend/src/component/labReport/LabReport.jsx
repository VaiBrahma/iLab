import { useDispatch, useSelector } from "react-redux";
import "./labReport.css";
import logo from "/logos/logo.png";
import Loading from "../loading/Loading";
// import { data } from "../../data";
const LabReport = () => {
  //get data using these three lines
  const pd = useSelector((state) => state.data);
  const data = pd.data[1];

  if (data === undefined ) {
    window.location.href = window.location.origin;
    return <Loading />;
  }

  return (
    <div className="containerLR bg-white">
      <h1 className="h1LR">Lab Report</h1>
      <div className="profile">
        <span>
          Name: <strong>{data[0].customer_name}</strong>
        </span>

        <span>Booking Date: {data[0].booking_date.slice(0, 10)}</span>
        <div className="imgContainer">
          {/* <img
            src={logo}
            style={{
              filter:
                "invert(36%) sepia(6%) saturate(4047%) hue-rotate(102deg) brightness(90%) contrast(85%)",
            }}
          ></img> */}
        </div>
        <span>Customer ID: {data[0].lead_id}</span>
        <span>Booking ID: {data[0].booking_id}</span>
      </div>
      <div className="header"></div>
      {data.map((obj) => {
        return (
          <div key={obj._id} className="tests">
            <h3 className="testName">{obj.test_name}</h3>
            <div className="subTest">
              <span className="headerLR">Test Description</span>
              <span className="headerLR">Value(s)</span>
              <span className="headerLR">Unit(s)</span>
              <span className="headerLR">Reference Range</span>
              {obj.test_values.map((test) => {
                return (
                  <>
                    {test.is_highlighted ? (
                      <div>
                        <span className="highlighted">
                          {test.parameter_name}
                        </span>
                        <br></br>
                        {test.test_method && (
                          <span className="method">
                            Method: {test.test_method}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div>
                        <span className="paraName">
                          {" "}
                          {test.parameter_name}{" "}
                        </span>
                        <br></br>
                        {test.test_method && (
                          <span className="method">
                            Method: {test.test_method}
                          </span>
                        )}
                      </div>
                    )}

                    {test.is_highlighted ? (
                      <span className="highlighted">
                        {test.parameter_value}
                      </span>
                    ) : (
                      <span> {test.parameter_value} </span>
                    )}

                    <span> {test.unit} </span>
                    <span>
                      {" "}
                      {test.lower_bound}-{test.upper_bound}{" "}
                    </span>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default LabReport;
