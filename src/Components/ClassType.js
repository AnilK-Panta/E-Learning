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
