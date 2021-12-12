import "./joinCourse.css";
import PlusSvg from "./PlusSvg";
export default function JoinCourse() {
  return (
    <div
      className="maxWidthHold"
      style={{
        marginTop: "150px",
        borderRadius: "20px",
        backgroundColor: "#EDE9F2",
        display: "flex",
      }}
    >
      <div
        className="joinCourseContent"
        style={{
          margin: "100px 0px",
          marginLeft: "70px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "45%",
        }}
      >
        <div
          className="joinCourseTag"
          style={{
            padding: ".8rem 1.4rem",
            backgroundColor: "#E4E2F4",
            borderRadius: "10px",
            color: "#9C4DF4",
            width: "fit-content",
            fontWeight: "500",
            fontSize: "1.2rem",
          }}
        >
          College Level
        </div>
        <h1
          style={{
            color: "#0A033C",
            fontSize: "2.7rem",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          Don’t waste time in COVID-19 pandemic. Develop your skills.
        </h1>
        <p
          style={{
            width: "100%",
            color: "#5D5A6F",
            lineHeight: "2rem",
            fontSize: "1rem",
            marginTop: "4px",
          }}
        >
          High-definition video is video of higher resolution and quality than
          standard-definition. While there is no standardized meaning for
          high-definition, generally any video.
        </p>
      </div>
      <div
        className="joinCourseImage"
        style={{
          width: "50%",
          height: "auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <PlusSvg right="48%" top="10%" index="0" />
        <img
          src="./image/joinCourse.png"
          alt="joinCourse"
          style={{
            position: "absolute",
            bottom: "-10px",
            width: "100%",
          }}
        ></img>
        <img
          src="./image/tech1.png"
          alt="alt"
          style={{
            position: "absolute",
            top: "22%",
            left: "-30px",
          }}
        ></img>
        <img
          src="./image/tech2.png"
          alt="alt"
          style={{
            position: "absolute",
            top: "22%",
            right: "40px",
          }}
        ></img>
        <img
          src="./image/tech3.png"
          alt="alt"
          style={{
            position: "absolute",
            top: "0",
            right: "0px",
          }}
        ></img>
        <div
          style={{
            width: "100%",
            height: "10px",
            backgroundColor: "black",
            filter: "blur(20px)",
            position: "absolute",
            bottom: "10px",
            left: "2%",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </div>
  );
}
