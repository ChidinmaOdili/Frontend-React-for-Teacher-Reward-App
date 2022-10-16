import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "./style.css";
import {
  Topbar,
  TopbarLeftSide,
  TopbarRighttSide,
  ImageWrapper,
  DashboardContainer,
  LeftSideBar,
  DashboardMainBody,
  SideBarLink,
} from "./Studentdashboard.style";
import axios from '../../api/axios'
import { getWalletBalance } from "./WalletBallance";
import Logout from "../Modal/logout/Logout";

const StudentDashboard2 = ({ children, navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);
  const [balance, setBalance] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);
  const [role, setRole] = useState(false);
  const navigate = useNavigate();
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  React.useEffect(() => {
    getWalletBalance().then((res) => {
      setBalance(formatter.format(res));
    });

    if (localStorage.getItem("role") === "STUDENT") {
      setRole(true);
    } else if (localStorage.getItem("role") === "TEACHER") {
      setRole(false);
    }
    
    
  }, [balance]);
  const handlePaymentData = () => {
    setShowForm(!showForm);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Topbar>
        <TopbarLeftSide>
          <ImageWrapper>
            <img src="/img/Frame 12.png" alt="" />
          </ImageWrapper>
          <h1>Reward your Teacher</h1>
          <span onClick={handleBurger}>
            <i className="fa fa-bars"></i>
          </span>
        </TopbarLeftSide>
        <TopbarRighttSide>
          <ImageWrapper>
            <img
              src="https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </ImageWrapper>
          <h3>{ localStorage.getItem('name') }</h3>
        </TopbarRighttSide>
      </Topbar>

      <DashboardContainer>
        <LeftSideBar className={isOpen ? "closeSideBar" : "openSideBar"}>
          <ul>
            {navItems.map((item) => (
              <SideBarLink onClick={handleCloseSideBar} to={item.link}>
                <li>
                  <i className={item.icon}></i>
                  <p>{item.name}</p>
                </li>
              </SideBarLink>
            ))}
          </ul>
          <button onClick={() => setShowLogoutModal(true)}>
            <i className="fa fa-sign-out"></i>
            <p>Logout</p>
          </button>

          {showLogoutModal && (
            <Logout
              closeModal={setShowLogoutModal}
              handleLogout={handleLogout}
            />
          )}
        </LeftSideBar>
        <DashboardMainBody>{children}</DashboardMainBody>
      </DashboardContainer>
    </>
  );
};

export default StudentDashboard2;
