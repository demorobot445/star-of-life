import { ServicePathFive, ServicePathFour, ServicePathThree } from "../Svg/Svg";
import s from "./services.module.scss";

const InsideElements = () => {
  return (
    <>
      <div className={`service-path-3 ${s.pathThree}`}>
        <ServicePathThree />
      </div>
      <div className={`service-path-4 ${s.pathFour}`}>
        <ServicePathFour />
      </div>
      <div className={`service-path-5 ${s.pathFive}`}>
        <ServicePathFive />
      </div>
    </>
  );
};

export default InsideElements;
