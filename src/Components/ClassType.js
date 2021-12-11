import Audio from "./Audio";
import Recorded from "./Recorded";
import Live from "./Live";
import "./classType.css";
export default function ClassType(props) {
  console.log(props);
  return (
    <div className="classTypeBtnWrap">
      {props.test}
      <span>{props.clasName}</span>
    </div>
  );
}
