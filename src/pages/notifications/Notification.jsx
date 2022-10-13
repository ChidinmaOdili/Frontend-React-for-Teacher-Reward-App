import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
// import "./style.css";
import {
  Topbar,
  TopbarLeftSide,
  TopbarRighttSide,
  ImageWrapper,
  DashboardContainer,
  LeftSideBar,
  DashboardMainBody,
  SideBarLink,
  TopBoxSection,
  BottomBoxSection,
  GreenTop,
  TransactionDetails,
} from "./Notification.style";

import Modal from "../Modal/Modal";
import axios from "../../api/axios";
import Logout from "../Modal/logout/Logout";

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

    React.useEffect(() => {
    const getNotification = async () => {
      try {
        const response = await axios.get("/api/user-notification");
        console.log(response.data);
        setNotification(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNotification();
  },[]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Topbar>
        <TopbarLeftSide>
          <ImageWrapper>
            <img src="img/Frame 12.png" alt="" />
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
          <h3>Henry</h3>
        </TopbarRighttSide>
      </Topbar>
      <DashboardContainer>
        <LeftSideBar className={isOpen ? "closeSideBar" : "openSideBar"}>
          <ul>
            <SideBarLink onClick={handleCloseSideBar} to="">
              <li>
                <i className="fas fa-th-large"></i>
                <p>Overview</p>
              </li>
            </SideBarLink>
            <SideBarLink onClick={handleCloseSideBar} to="">
              <li>
                <i className="fa fa-school"></i>
                <p>Schools</p>
              </li>
            </SideBarLink>
            <SideBarLink onClick={handleCloseSideBar} to="">
              <li>
                <i className="fa fa-bell"></i>
                <p>Notifications</p>
              </li>
            </SideBarLink>
            <SideBarLink onClick={handleCloseSideBar} to="">
              <li>
                <i className="fa fa-comment-dots"></i>
                <p>Messaging</p>
              </li>
            </SideBarLink>
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
        <DashboardMainBody>
          <div className="notificationList">
            <h2>Notifications</h2>
            { notification.length > 0 ? notification.map((item) => (
                        <div className="notifications">
                            <p><b>{item.date}</b></p>
                            <p>{item.notificationBody}</p>
                        </div>
                    )
                ) : <h3>No Notification</h3>}
            </div>
        </DashboardMainBody>
      </DashboardContainer>
    </>
  );
};

export default Notifications;
