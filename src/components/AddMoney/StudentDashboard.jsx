import React from "react";
import {
  Topbar, TopbarLeftSide, TopbarRighttSide, ImageWrapper, DashboardContainer, LeftSideBar, DashboardMainBody, SideBarLink, TopBoxSection, BottomBoxSection, GreenTop, TransactionDetails 
} from "./Dashboard.style";
function StudentDashboard() {
  return (
    <div>
      <DashboardContainer>
        {/* <div className='Body'>
              <div className='title'> 
                <h3 className='W-head'>My Wallet Ballance</h3>
                <p className='Status'>Account is Active</p>
              </div>
              <h1 className='Amount'>N0.00</h1>
        <button className='Add-btn' >+ Add Money{ }</button>
          </div> */}
        <DashboardMainBody>
          <h2>My Dashboard</h2>
          <TopBoxSection>
            <div>
              <h4>My Wallet Balance</h4>
              <p>Account is active</p>
            </div>
            <h1>N0.00</h1>
            <button>
              <i class="fa fa-add"></i>
              <span>+ Add Money</span>
            </button>
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
    </div>
  );
}

export default StudentDashboard;
