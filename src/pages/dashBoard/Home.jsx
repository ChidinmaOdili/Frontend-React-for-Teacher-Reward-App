import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axios";

const Home = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <p>Welcome user</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
