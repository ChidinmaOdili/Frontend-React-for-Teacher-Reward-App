import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { getTeacherWalletBalance } from "./TeacherWalletBal";
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
} from "./Teacherdashboard.style";
import StudentDashboard2 from "../studentDashboard/StudentDashboard copy";
import { teacherDashBoard } from "../../Utility/DashboardUtilities";
const TeacherDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);

  const [balance, setBalance] = React.useState(0);
  // const [showForm, setShowForm] = React.useState(false);
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });
  React.useEffect(() => {
    getTeacherWalletBalance().then((res) => {
      setBalance(formatter.format(res));
    });
  }, [balance]);

  return (
    <StudentDashboard2 navItems={teacherDashBoard}>
      <TopBoxSection>
        <div>
          <h4>My Wallet Balance</h4>
          <p>Account is active</p>
        </div>
        <h1>{balance}</h1>
        <p>Total Money Received</p>
      </TopBoxSection>
    </StudentDashboard2>
  );
};

export default TeacherDashboard;
