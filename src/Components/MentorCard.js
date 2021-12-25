import { Link } from "react-router-dom";

export default function MentorCard() {
  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#FFFFFF",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1em",
        padding: "1em 0 2em 0",
      }}
    >
      <img
        src="./image/mentor1.png"
        alt="mentor"
        style={{
          width: "130px",
          height: "130px",
          borderRadius: "40px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#0A033C",
            fontWeight: "500",
          }}
        >
          Anil K. Panta
        </span>
        <p
          style={{
            color: "#5D5A6F",
            fontSize: ".9rem",
          }}
        >
          Founder & Mentor
        </p>
      </div>
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <span
          className="mentorCardBtn"
          style={{
            color: "#9C4DF4",
            padding: ".5em 1.5em",
            border: "1px solid #9C4DF4",
            borderRadius: "5px",
            fontWeight: "500",
          }}
        >
          Visit Profile
        </span>
      </Link>
    </div>
  );
}
