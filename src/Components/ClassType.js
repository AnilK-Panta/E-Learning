import Audio from "./Audio";
import Recorded from "./Recorded";
import Live from "./Live";
import "./classType.css";
export default function ClassType(props) {
  console.log(props);
  //   var ClassIcon = Live;
  return (
    <div className="classTypeBtnWrap">
      <Live />
      {/* <Live />
      <Recorded /> */}
      <span>{props.className}</span>
    </div>
  );
}
