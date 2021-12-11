import "./App.css";

import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

import Classes from "./Components/Classes";
import Lessons from "./Components/Lessons";
import JoinCourse from "./Components/JoinCourse";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Classes />
      <Lessons />
      <JoinCourse />
    </div>
  );
}

export default App;
