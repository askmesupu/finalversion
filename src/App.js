import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import LoveEnglish from "./pages/LoveEnglish";
import LoveBangla from "./pages/LoveBangla";
import LoveHindi from "./pages/LoveHindi";
import MyHeart from "./pages/MyHeart";
import AnswerQuestion from "./pages/AnswerQuestion";

function App() {
  return (
    <div>
      <h1>Supto ❤️ Shiropa</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/english">My Love (English)</Link> |{" "}
        <Link to="/bangla">My Love (Bangla)</Link> |{" "}
        <Link to="/hindi">My Love (Hindi)</Link> |{" "}
        <Link to="/myheart">My Heart</Link> |{" "}
        <Link to="/question">Answer my question</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/english" element={<LoveEnglish />} />
        <Route path="/bangla" element={<LoveBangla />} />
        <Route path="/hindi" element={<LoveHindi />} />
        <Route path="/myheart" element={<MyHeart />} />
        <Route path="/question" element={<AnswerQuestion />} />
      </Routes>
    </div>
  );
}

export default App;
