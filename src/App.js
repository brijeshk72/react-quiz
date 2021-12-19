import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/main.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";

function App() {
  return (
    <div className="main">
      <div className="content-wrapper">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/score" element={<Score />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
