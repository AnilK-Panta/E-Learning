import MentorCard from "./MentorCard";

export default function MentorsList() {
  return (
    <div className="maxWidthHold">
      <div
        style={{
          margin: "2em 0",
          display: "flex",
          gap: "1.2em",
        }}
      >
        <span className="mentorBtn mentorBtnActive">All Mentors</span>
        <span className="mentorBtn">For Kindergarten</span>
        <span className="mentorBtn">For high school</span>
        <span className="mentorBtn">For college</span>
        <span className="mentorBtn">For Technology</span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2em",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </div>
  );
}
