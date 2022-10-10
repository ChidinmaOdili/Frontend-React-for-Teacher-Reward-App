import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../api/axios";
import Modal from "../Modal/Modal";
import Logout from "./Logout";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const closeModal = () => {
    setShowModal(false);
  };

  const x = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <p>Welcome user</p>
      <button onClick={() => setShowModal(true)}>Logout</button>

      {showModal && (
        <Logout
          closeModal={closeModal}
          handleLogout={x}
        />
      )}
    </div>
  );
};

export default Home;
