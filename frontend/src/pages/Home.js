import React, { useEffect } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const userInfo = localStorage.getItem("userInfo");
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
   
      <Navbar />
      <Header />
      <About />
 
      <Contact />
    </>
  );
};

export default Home;
