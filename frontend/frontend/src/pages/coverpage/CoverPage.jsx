import { useSelector } from "react-redux";
import "./cover.css";
import image from "./img2.jpg";
import logo from "../../../public/logos/logo2.png";
import Loading from "../../component/loading/Loading";
const CoverPage = () => {
  const p = useSelector((state) => state.data);
  const data = p.data[1];

  // if (data === undefined ) {
  //   window.location.href = window.location.origin;
  //   return <Loading />;
  // }

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="mainContent">
      <div className="Company">
        <div className="logoContainer h-auto">
          <img className="logoImg" src={logo}></img>
        </div>
        <div className="Title">
          SMART HEALTH <br></br>
          <span style={{ color: "#108150" }}>REPORT</span>
        </div>
      </div>
      <div className="CoverimgContainer">
        <div className="leftOFIMG ">
          An Insigthful Lab Report for better understanding
        </div>
        <img className="image" src={image}></img>
        <div className="rightOFIMG"></div>
      </div>
      <div className="Profile">
        <span>Prepared for</span>
        <div></div>
        <span className="name">
          {data[0].customer_name || "Mr Pankaj Singh"} <br />
        </span>
      </div>
    </div>
  );
};
export default CoverPage;
