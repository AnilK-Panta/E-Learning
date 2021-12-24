import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import Mentors from "./Components/Mentors";

function App(props) {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/mentors" element={<Mentors />}></Route>
      </Routes>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
