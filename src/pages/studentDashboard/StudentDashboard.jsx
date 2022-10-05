import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
import { Topbar, TopbarLeftSide, TopbarRighttSide, ImageWrapper, DashboardContainer, LeftSideBar, DashboardMainBody, SideBarLink, TopBoxSection, BottomBoxSection, GreenTop, TransactionDetails } from './Studentdashboard.style'

const StudentDashboard = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleBurger = () => setIsOpen(!isOpen);
    const handleCloseSideBar = () => setIsOpen(true);

  return (
    <>
        <Topbar>
            <TopbarLeftSide>
                <ImageWrapper>
                    <img src="img/Frame 12.png" alt="" /> 
                </ImageWrapper>
                <h1>Reward your Teacher</h1>
                <span onClick={handleBurger}><i className='fa fa-bars'></i></span>
            </TopbarLeftSide>
            <TopbarRighttSide>
                <ImageWrapper>
                    <img src="https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" /> 
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
                    <p>Logout</p>
                </button>

            </LeftSideBar>
    
        </DashboardContainer>
    </>
  )
}

export default StudentDashboard
