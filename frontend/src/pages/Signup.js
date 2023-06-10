import React, { useEffect, useState } from "react";
import "../styles/LoginStyles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        username,
        email,
        password,
      });
      if (response.data) {
        console.log("success");
      }
      console.log(response.data);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    if (userInfo) navigate("/home");
  }, [navigate]);

  return (
    <div className="login-page">
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <div>
            <p>Your Username</p>
            <input
              type="text"
              name="user-name"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <p>Your email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <p>Your password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-btn" type="submit">
            Signup
          </button>
          <h3>Log into your account</h3>
          <Link to="/">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
