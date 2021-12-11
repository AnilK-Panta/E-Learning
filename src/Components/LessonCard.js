import "./lessonCard.css";
import LessonCardBtn from "./LessonCardBtn";
export default function LessonCard() {
  return (
    <div className="lessonCardWrap">
      <div className="lessonOne">1</div>
      <h1>Standard One</h1>
      <p>
        Standard 1 is a foundation Standard that reflects 7 important
        concepts...
      </p>
      <LessonCardBtn />
    </div>
  );
}
