import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Multiplayer from "./components/Multiplayer/Multiplayer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/access" element={<h1>singin</h1>} />
          <Route path="/singleplayer" element={<h1>singin</h1>} />
          <Route path="/multiplayer" element={<Multiplayer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
