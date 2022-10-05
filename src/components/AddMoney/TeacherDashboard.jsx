import React from "react";
import {
    DashboardMainBody,
    TopBoxSection,
  } from "./Dashboard.style";
function TeacherDashboard() {
  return (
    <div>
        <DashboardMainBody>
          <h2>My Dashboard</h2>
          <TopBoxSection>
            <div>
              <h4>My Wallet Balance</h4>
              <p>Account is active</p>
            </div>
            <h1>N0.00</h1>
            <p>Total Money Received</p>
          </TopBoxSection>
        </DashboardMainBody>
    </div>
  );
}

export default TeacherDashboard;
