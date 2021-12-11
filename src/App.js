import "./App.css";
import Banner from "./Components/Banner";
import ClassType from "./Components/ClassType";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Title from "./Components/Title";
// import Audio from "./Components/Audio";
// import Recorded from "./Components/Recorded";
import Live from "./Components/Live";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Hero />
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
    </div>
  );
}

export default App;
