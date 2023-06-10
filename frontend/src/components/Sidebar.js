import React, { useState } from "react";
import { FaBook, FaHome, FaMoon, FaQuestion, FaSearch, FaSun } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Scriptures from "../pages/Scriptures";

const Sidebar = () => {
  const [colorTheme, setColorTheme] = useState(false);
  const navigate = useNavigate();
  const changeTheme = () => {
    setColorTheme(!colorTheme);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="sidebar">
      <span>
        <Link to="/home">
          <FaHome size={20} />
        </Link>
      </span>
      <span>
        <Link to="/scriptures">
          <FaBook/>
        </Link>
      </span>
      <span>
        <Link to="/search">
          <FaSearch size={20} />
        </Link>
      </span>
      <span>
        <Link to="/questions">
          <FaQuestion size={20} />
        </Link>
      </span>
      <div className="color-theme" onClick={changeTheme}>
        {" "}
        {colorTheme ? (
          <FaSun color="white" size={20} />
        ) : (
          <FaMoon color="white" size={20} />
        )}
      </div>

      <span>
        <Link to="/">
          <BiLogOut size={20} />
        </Link>
      </span>
    </div>
  );
};

export default Sidebar;
