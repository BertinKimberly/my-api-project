import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/LoginStyles.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const realUser = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if (realUser.data) {
        console.log("success");
      }
      console.log(realUser.data);
      localStorage.setItem("userInfo", JSON.stringify(realUser.data))
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const userInfo = localStorage.getItem('userInfo')

  useEffect(() => {
    if(userInfo) {
      navigate('/home')
    }
  }, [navigate])

  return (
    <div className="login-page">
      <div className="login-container">
        <form onSubmit={loginUser}>
          <div>
            <p>Your email</p>
            <input
              type="text"
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
            Login
          </button>
          <h3>Already have an account?</h3>
          <Link to="/signup">Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
