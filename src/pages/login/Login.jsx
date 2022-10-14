import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import line from "../../assets/loginAssets/line.svg";
import Google from "../../assets/loginAssets/Google.svg";
import rewardlogo from "../../assets/loginAssets/rewardlogo.svg";
import axios from "axios";
import { LoginContainer } from "./Login.style";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [snackbarHandler, setSnackbarHandler] = useState(false);

  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_API_URL;
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleClose = () => {
    setSnackbarHandler(false);
  };

  const errorStyle = {
    border: "2px solid red",
    borderRadius: "5px",
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      localStorage.clear();


      const response = await axios.post(`${baseURL}/api/auth/login/`, data);
      console.log(response);
      localStorage.setItem("userId", response.data.data.id);
      localStorage.setItem("email", response.data.data.email);
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("role", response.data.data.role);
      const role = response.data.data.role;
      const message = response.data.message;

      if (message === "success") {
        setMessage(message);
        setSnackbarHandler(true);
        if (role === "STUDENT") {
          navigate("/student-dashboard");
          window.location.reload();
        } else if (role === "TEACHER") {
          navigate("/teacher-dashboard");
          window.location.reload();
        }
      }
    } catch (error) {
      setLoading(false);
      setSnackbarHandler(true);
      setMessage(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <LoginContainer>
      <Snackbar
        open={snackbarHandler}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </MuiAlert>
      </Snackbar>
      <div className="container">
        <div className="logo">
          <img src={rewardlogo} alt="rewardlogo" />
          <h2>Reward your Teacher</h2>
        </div>

        <div className="login_container">
          <p className="login_p">Login To Your Account</p>
          <form onSubmit={handleSubmit}>
            <div className="login_block">
              <label>Email</label>
              <input
                type="email"
                onChange={handleEmail}
                placeholder="Enter your email"
                {...(error && { style: errorStyle })}
                onClick={() => setError("")}
              />
            </div>

            <div className="login_block">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={handlePassword}
                {...(error && { style: errorStyle })}
                onClick={() => setError("")}
              />
            </div>

            <Link href="#" className="login_forgot_password">
              Forgot password?
            </Link>

            <div>
              <LoadingButton
                loading={loading}
                className="login_submit_button"
                type="submit"
                sx={{
                  ":hover": {
                    bgcolor: "success.main", // theme.palette.primary.main
                    color: "white",
                  },
                }}
              >
                Login
              </LoadingButton>
            </div>

            <div className="or">
              <img src={line} alt="line" />
              <p id="">Or</p>
              <img src={line} alt="" />
            </div>
          </form>
          <button className="google_signin_button">
            <img src={Google} alt="google logo" />
            Sign Up with Google
          </button>
          <div></div>{" "}
          <p className="dont_have_account">
            {" "}
            Don't have an account?{" "}
            <b>
              <Link to="/signup">Create Account</Link>
            </b>
          </p>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
