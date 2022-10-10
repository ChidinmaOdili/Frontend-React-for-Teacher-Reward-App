import React, { useState } from "react";
import { Form, Link , useNavigate} from "react-router-dom";
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
  TopBoxSection,
  BottomBoxSection,
  GreenTop,
  TransactionDetails,
} from "./Studentdashboard.style";

import Modal from "../Modal/Modal";
import { getWalletBalance } from "./WalletBallance";
import FundWallet from "./FundWallet";
import Logout from "../Modal/logout/Logout";


const StudentDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);
  const [balance, setBalance] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);
  const navigate = useNavigate();
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  React.useEffect(() => {
    getWalletBalance().then((res) => {
      setBalance(formatter.format(res));
    });
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
          <button>
            <i className="fa fa-sign-out"></i>
            <p onClick={()=> setShowLogoutModal(true)}>Logout</p>
          </button>
        
          {showLogoutModal && <Logout closeModal={()=> setShowLogoutModal(false)} handleLogout={handleLogout} />}
        
        </LeftSideBar>
        <DashboardMainBody>
          <h2>My Dashboard</h2>
          <TopBoxSection>
            <div>
              <h4>My Wallet Balance</h4>
              <p>Account is active</p>
            </div>
            <h1>{balance}</h1>
            <button onClick={handlePaymentData}>
              <i class="fa fa-add"></i>
              <span>Add Money</span>
            </button>
            {showForm && (
              <Modal closeModal={handlePaymentData}>
                <FundWallet />
              </Modal>
            )}
          </TopBoxSection>
          <BottomBoxSection>
            <GreenTop></GreenTop>
            <TransactionDetails>
              <div>
                <h4>Total Money Sent</h4>
                <h1>N0.00</h1>
                <p>Sent</p>
              </div>
              <span>
                <img src="img/Vector (8).png" alt="" />
              </span>
            </TransactionDetails>
          </BottomBoxSection>
        </DashboardMainBody>
      </DashboardContainer>
    </>
  );
};

export default StudentDashboard;
