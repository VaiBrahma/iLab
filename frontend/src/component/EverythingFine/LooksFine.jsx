import { useSelector } from "react-redux";
import "./looksFine.css";
import React from "react";

const LooksFine = () => {
  const p = useSelector((state) => state.data);
  const data = p.data[1];
  return (
    <div className="containerLK">
      <h2 className="h2LK">Medical Test Report</h2>
      <div className="messageLK">
        <p className="paraLK">
          All of your medical test reports look fine. There are no abnormalities
          or concerns found in the tests conducted. Please consult your
          healthcare provider if you have any further questions or concerns.
        </p>
      </div>
      <p>If you have any questions, you may to contact us.</p>
      <div className="footerLK">
        <p className="paraLK">
          Generated for {data[0].customer_name} <br></br>
          Booking ID: {data[0].booking_id}
        </p>
      </div>
    </div>
  );
};
export default React.memo(LooksFine);
