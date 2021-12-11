import "./lessonCard.css";
import LessonCardBtn from "./LessonCardBtn";
export default function LessonCard(props) {
  return (
    <div className="lessonCardWrap">
      <div className="lessonOne">{props.class}</div>
      <h1>{props.standsrd}</h1>
      <p>{props.standardDetail}</p>
      <LessonCardBtn />
    </div>
  );
}
