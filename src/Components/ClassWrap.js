import { useState } from "react";
import LessonCard from "./LessonCard";
import { classesDetail } from "../api/classesDetails";

export default function ClassWrap(props) {
  const [state, setstate] = useState(classesDetail);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        justifyContent: "center",
        marginTop: "3rem",
      }}
    >
      {state.map((curElem) => {
        return (
          <LessonCard
            bgColor={curElem.color}
            class={curElem.id}
            standsrd={curElem.standard}
            standardDetail={curElem.detail}
          />
        );
      })}
    </div>
  );
}
