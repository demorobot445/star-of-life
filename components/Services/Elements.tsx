import {
  ServicePathFive,
  ServicePathFour,
  ServicePathOne,
  ServicePathSix,
  ServicePathThree,
  ServicePathTwo,
} from "../Svg/Svg";
import s from "./services.module.scss";

const Elements = () => {
  return (
    <>
      {/* <div className={`service-path-1 ${s.pathOne}`}>
        <ServicePathOne />
      </div> */}
      <div className={`service-path-2 ${s.pathTwo}`}>
        <ServicePathTwo />
      </div>
      <div className={`service-path-3 ${s.pathThree}`}>
        <ServicePathThree />
      </div>
      <div className={`service-path-4 ${s.pathFour}`}>
        <ServicePathFour />
      </div>
      <div className={`service-path-5 ${s.pathFive}`}>
        <ServicePathFive />
      </div>
      {/* <div className={`service-path-6 ${s.pathSix}`}>
        <ServicePathSix />
      </div> */}
    </>
  );
};

export default Elements;
