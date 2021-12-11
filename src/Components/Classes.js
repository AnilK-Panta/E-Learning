import Banner from "./Banner";
import ClassType from "./ClassType";
import Title from "./Title";
// import Audio from "./Components/Audio";
// import Recorded from "./Components/Recorded";
import Live from "./Live";
export default function Classes() {
  return (
    <>
      <Title />
      <Banner />
      <div
        className="classTypeButton maxWidthHold"
        style={{ marginTop: "40px" }}
      >
        <ClassType ClassIcon={Live} className="Audio Class" />
        <ClassType className="Live Class" />
        <ClassType className="Recorded Class" />
      </div>
    </>
  );
}
