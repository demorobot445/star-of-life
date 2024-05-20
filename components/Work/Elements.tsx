import {
  WorkPathFive,
  WorkPathFour,
  WorkPathOne,
  WorkPathSix,
  WorkPathThree,
  WorkPathTwo,
} from "../Svg/Svg";
import s from "./work.module.scss";

const Elements = ({ id }: { id: number }) => {
  switch (id) {
    case 0:
      return (
        <div className={`work-path-1 ${s.pathOne}`}>
          <WorkPathOne />
        </div>
      );

    case 1:
      return (
        <>
          <div className={`work-path-2 ${s.pathTwo}`}>
            <WorkPathTwo />
          </div>
          <div data-change className={`work-path-2 ${s.pathTwo}`}>
            <WorkPathTwo />
          </div>
        </>
      );

    case 2:
      return (
        <div className={`work-path-3 ${s.pathThree}`}>
          <WorkPathThree />
        </div>
      );

    case 3:
      return (
        <>
          <div className={`work-path-4 ${s.pathFour}`}>
            <WorkPathFour />
          </div>
          <div data-change="1" className={`work-path-4 ${s.pathFour}`}>
            <WorkPathFour />
          </div>
          <div data-change="2" className={`work-path-4 ${s.pathFour}`}>
            <WorkPathFour />
          </div>
          <div data-change="3" className={`work-path-4 ${s.pathFour}`}>
            <WorkPathFour />
          </div>
        </>
      );

    case 4:
      return (
        <div className={`work-path-5 ${s.pathFive}`}>
          <WorkPathFive />
        </div>
      );

    default:
      return <></>;
  }
};

export default Elements;
