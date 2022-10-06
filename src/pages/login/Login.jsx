import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import line from "../../assets/loginAssets/line.svg";
import Google from "../../assets/loginAssets/Google.svg";
import rewardlogo from "../../assets/loginAssets/rewardlogo.svg";
import axios from "../../api/axios";
import { LoginContainer } from "./Login.style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const errorStyle = {
    border: "2px solid red",
	borderRadius: "5px"
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };

      const response = await axios.post("/api/auth/login/", data);
      console.log(response);
      localStorage.setItem("token", response.data.data.token);
      navigate("/home");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <LoginContainer>
      <div className="container">
        <div className="logo">
          <img src={rewardlogo} alt="rewardlogo" />
          <h2>Reward your Teacher</h2>
        </div>

        <div className="login_container">
          <p className="login_p">Login as an old student</p>
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
              <button className="login_submit_button" type="submit">
                Login
              </button>
              <div className="error">{error && <p>{error}</p>}</div>
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
              <Link href="#">Create Account</Link>
            </b>
          </p>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
