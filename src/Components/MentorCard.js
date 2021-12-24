export default function MentorCard() {
  return (
    <div
      style={{
        width: "250px",
      }}
    >
      <img
        src="./image/mentor1.png"
        alt="mentor"
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          marginTop: ".8em",
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
    </div>
  );
}
