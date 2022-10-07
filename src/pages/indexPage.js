import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import rytpe1 from "../assets/image/rytpe-1.png";
import rytpe2 from "../assets/image/rytpe-2.png";
import rytpe3 from "../assets/image/rytpe-3.png";
import rytpe4 from "../assets/image/rytpe-4.png";
import rytpe5 from "../assets/image/rytpe-5.png";
import "../App.css";
import LandingPageButtonComponent from "../components/LandingPageButtonComponent";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { step, teacherRoles } from "../Utility/landingPageUtils";
import AppBarComponent from "../components/AppBarComponent";

import Modal from "../components/Modal/Modal";
import "../components/Modal/Modal.css";
import "../components/Modal/SuccessModal.css";
import avataruser from "../assets/image/avataruser.svg";
import PaymentModal from "../components/Modal/PaymentModal";
import "../components/Modal/PaymentModal.css";
import paystack from "../assets/image/paystack.svg";
import SuccessModal from "../components/Modal/SuccessModal";
import suceesful from "../assets/image/suceesful.png";

const LandingPage = ({ isMediumSize }) => {
  const [steps, setSteps] = useState(step);
  const [ShowModal, setShowModal] = useState(false);
  const [insideModal, setInsideModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!ShowModal);
  };
  const toggleinsideModal = () => {
    setInsideModal(!insideModal);
  };
  return (
    <>
      <AppBarComponent isMediumSize={isMediumSize} />
      <Paper sx={{ mt: 2 }}>
        <Container maxWidth="md" sx={{ height: "100%" }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ height: "100%" }}>
              <Typography
                textAlign="left"
                className="heroText"
                sx={{ color: "#55a630" }}
                component="h1"
                variant="h3"
              >
                Send Instant Heartfelt Rewards to Your Teachers
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                sx={{ fontSize: "18px", mt: 2 }}
              >
                A digital platform that digitizes the process of sending funds
                to teachers who have done their work with emphatic kindness.
              </Typography>
              <Box
                alignItems="center"
                className="cta"
                justifyContent="space-between"
                onClick={toggleModal}
              >
                <LandingPageButtonComponent
                  sx={{ background: "#55a630", mt: 2, mr: 10 }}
                  value="Get Started"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                alt="heroImage"
                className={isMediumSize ? "rytpe1" : ""}
                src={rytpe1}
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper sx={{ background: "#FFF2EB99", py: 10 }}>
        <Container maxWidth="md">
          <Typography
            fontWeight="600"
            textAlign="left"
            component="h2"
            variant="h5"
          >
            {" "}
            How It Works{" "}
          </Typography>
          <Typography
            sx={{ fontSize: "14px" }}
            variant="h6"
            component="p"
            textAlign="left"
          >
            {" "}
            The Easiest way to show you care
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid justifySelf="left" item xs={12} sm={12} md={6} lg={6}>
              <Timeline>
                {steps.map((item) => (
                  <TimelineItem key={item.step} sx={{}}>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color="success" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" sx={{ fontSize: "10px", mb: 1 }}>
                        {item.step}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontSize: "18px", color: "#55a630", mb: 2 }}
                      >
                        {item.instruction}
                      </Typography>
                      <Typography variant="h6" sx={{ fontSize: "14px" }}>
                        {item.detail}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img alt="rytpe-2" src={rytpe2} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper sx={{ background: "#55a630", pt: 5 }}>
        <Container maxWidth="md">
          <Grid
            container
            sx={{ height: "100%" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ height: "100%" }}>
              <Typography
                textAlign="left"
                className="heroText"
                sx={{ color: "#FFFFFF", fontSize: "24px" }}
                component="h1"
                variant="h3"
              >
                Send Surprise Rewards To Your Teacher Today
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                sx={{ fontSize: "14px", mt: 2, color: "#FFFFFF" }}
              >
                A digital platform that digitizes the process of sending funds
                to teachers who have done their work with emphatic kindness.
              </Typography>
              <Box
                alignItems="center"
                className="cta"
                justifyContent="space-between"
              >
                <LandingPageButtonComponent
                  sx={{
                    background: "#FFFFFF",
                    mt: 2,
                    mr: 10,
                    color: "#55a630",
                  }}
                  value="Get Started"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ height: "100%" }}
              alignItems="baseline"
            >
              <img alt="rytpe-2" src={rytpe3} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper sx={{ background: "#F7F7F7", py: 5 }}>
        <Container maxWidth="md">
          <Typography
            fontWeight="600"
            textAlign="left"
            sx={{ fontSize: "18px" }}
            component="h2"
            variant="h5"
          >
            {" "}
            The Teacher's Reward Should{" "}
          </Typography>
          <Typography
            fontWeight="600"
            textAlign="left"
            sx={{ fontSize: "18px" }}
            component="h2"
            variant="h5"
          >
            {" "}
            no longer be in Heaven{" "}
          </Typography>
          <Grid
            container
            sx={{ height: "100%" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ height: "100%" }}>
              {teacherRoles.map((item, index) => (
                <Typography
                  key={index}
                  textAlign="left"
                  sx={{ fontSize: "14px" }}
                  variant="h6"
                >
                  {item}
                </Typography>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ height: "100%" }}
              alignItems="baseline"
            >
              <img alt="rytpe-2" className="rytpe4" src={rytpe4} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper sx={{ background: "#FFFFFF", py: 10 }}>
        <Container maxWidth="md">
          <Typography
            fontWeight="600"
            sx={{ fontSize: "18px", mb: 4 }}
            component="h2"
            variant="h5"
          >
            {" "}
            Our Patners{" "}
          </Typography>
          <img alt="rytpe-2" className="rytpe5" src={rytpe5} />
        </Container>
      </Paper>
      <Paper sx={{ background: "#000000", pt: 10, color: "#FFFFFF" }}>
        <Container maxWidth="md">
          <Typography
            fontWeight="600"
            sx={{ fontSize: "18px", mb: 4, color: "white" }}
            component="h2"
            variant="h5"
          >
            {" "}
            Reward Your Teacher{" "}
          </Typography>
          <Tabs textColor="inherit" sx={{ ml: 25, mb: 5 }}>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Reward Your Teacher" />
          </Tabs>
          <hr color="grey" />
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="h6"
                textAlign="left"
                sx={{ fontSize: "10px", mb: 4, color: "white" }}
              >
                © {new Date().getFullYear()} Reward Your Teacher
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <LinkedInIcon sx={{ ml: 35 }} fontSize="10px" />
              <FacebookIcon fontSize="10px" />
              <InstagramIcon fontSize="10px" />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      {/* {
      ShowModal && (
        <Modal title="Profile details" closeModal={toggleModal}>
          <div className="contentContainer">
            <div className="userInfo">
              <img src={avataruser} alt="img" className="avatar"></img>
              <div className="userInfo-add">
                <h2 className="userrname-avatar">Chioma Awoniyi</h2>
                <p className="school-info"> Iyana Ipaja Grammar School</p>
                <p className="title-info">Head Teacher</p>
              </div>
            </div>
            <h1 className="Editbutton">Edit</h1>
          </div>
          <div className="AboutModal">
            <h1 className="about-text">About</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur feugiat aenean morbi non pretium. Tortor lectus quam
              dictumst nunc, faucibus cursus. Mi sit in bibendum faucibus sed ac
              id. Tortor lectus quam dictumst nunc, faucibus cursus. Mi sit in
              bibendum faucibus sed ac id.
            </p>
          </div>
          <div className="info-section">
            <h1 className="info-header"> Other info</h1>
            <h1 className="email-style">choimaawoniyi@gmail.com</h1>
            <h1 className="phone-number">08098556634</h1>
          </div>
          <div className="button-section">
            <button className="first-btn" onClick={toggleinsideModal}>
              Send Reward
            </button>
            <button className="second-btn">Send message</button>
          </div>
        </Modal>
      )
      } */}

      {/* {
      insideModal && (
        <PaymentModal
          icon={paystack}
          title="Pay with Wallet Balance"
          closeModal={toggleinsideModal}
        >
         

          <div className="form-wrapper">
            <div className="form-style">
                <p className="p-tag">Amount</p>
              <input type="number" placeholder="Enter amount here..." className="input-size" />
            </div>
          </div>
          <div className="btn-new-div">
            <button className="new-btn">Pay NGR 20,000</button>
          </div>
          
        </PaymentModal>
      )
      } */}

      {ShowModal && (
        <SuccessModal closeModal={toggleModal}>
          <div className="image-div">
            <img src={suceesful} alt="img" className="image-radius" />
          </div>
          <div className="header-div">
            <h1 className="header-class">Reward Sent Successfully</h1>
          </div>
          <div className="amount-class">
            <h1 className="amount-style">
              You just sent <span className="amout-coded">N15,000</span> to{" "}
              <span className="name-style">Chioma Awoniyi</span>
            </h1>
          </div>
          <div className="btn">
            <button className="btn-style">Done</button>
          </div>
        </SuccessModal>
      )}
    </>
  );
};

export default LandingPage;
