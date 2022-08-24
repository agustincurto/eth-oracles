import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import DataFeed from "./pages/datafeed";
import VRF from "./pages/vrf";
import Keeper from "./pages/keeper";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" exact element={<Home />} />
        <Route path="/datafeeds" element={<DataFeed />} />
        <Route path="/vrfs" element={<VRF />} />
        <Route path="/keepers" element={<Keeper />} />
      </Routes>
    </Router>
  );
}

export default App;
