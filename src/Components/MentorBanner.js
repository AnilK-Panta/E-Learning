import MentorSvg from "./MentorSvg";

export default function MentorBanner() {
  return (
    <div
      className="maxWidthHold"
      style={{
        borderRadius: "0 0 1em 1em",
        backgroundColor: "#EFEBF5",
        padding: "1em 0",
      }}
    >
      <span
        style={{
          marginTop: "1.2em",
          marginLeft: "1.5em",
          color: "rgba(10, 3, 60, 0.8)",
        }}
      >
        Home / Our Mentors
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <h1
          style={{
            width: "25%",
            color: "#0A033C",
            fontWeight: "500",
          }}
        >
          Eduvi has the qualified mentor
        </h1>
        <MentorSvg />
      </div>
    </div>
  );
}
