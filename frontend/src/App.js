import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Scriptures from "./pages/Scriptures";
const App = () => {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/scriptures" element={<Scriptures />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
