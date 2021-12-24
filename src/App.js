import "./App.css";

import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

import Classes from "./Components/Classes";
import Lessons from "./Components/Lessons";
import JoinCourse from "./Components/JoinCourse";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Classes />
      <Lessons />
      <JoinCourse />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
