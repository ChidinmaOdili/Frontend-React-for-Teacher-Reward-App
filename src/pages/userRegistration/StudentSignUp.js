import React, { useEffect, useState } from "react";
import Google from "../../assets/loginAssets/Google.svg";
import rewardlogo from "../../assets/loginAssets/rewardteacherlogo.svg";
import axios from "../../api/axios";
import { Link } from 'react-router-dom'
import { SignUpContainer, UserHeader, DemiHeader, PageBody, ImageWrapper1,
       GoogleSignUpBox, GoogleSignUpLink, InputBody, ButtonWrapper  } from "./Form.style";
import { LineSection,AccountCheck} from "../userRedirectPage/Redirect.styled";


const initialValues = {
  name: "",
  email: "",
  password: "",
  school: "",
  
};

export default function Form2() {
  const [cont, setCont] = useState(false);
  const [schools, setSchools] = useState([]);
  const [values, setValues] = useState(initialValues); 

  //const navigate = useNagivate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      const response = await axios.post(
        "http://localhost:5050/api/register-student",
        values,
        {
          headers: {
            Accept: "application/json"
          },
        }
      );
      console.log(response);
      console.log(values);
      // navigate("/login");
    } catch (error) {
      console.log(error);
      // setError(error.response.data.message);
    }
  };

  useEffect((url, config) => {
    axios
      .get("http://localhost:5050/api/schools/0/31/name")
      .then((response) => {
        console.log(response);
        setSchools(response.data.data.content);
      });
  }, []);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <SignUpContainer>
            <UserHeader className="header">
            <img src={rewardlogo} alt="Logo" />
            </UserHeader>

          <PageBody className="pageBody">
            
              <form className="signupForm" onSubmit={handleSubmit}>
                   
                <div
                    className="first"
                    style={{ display: !cont ? "block" : "none" }}
                        >
                <DemiHeader>
                    <h3 className="signupuser">Sign Up as an old Student </h3>
                </DemiHeader>

                    <InputBody>
                        <label>Name</label>
                        <input
                            onChange={handleInputChange}
                            className="input"
                            type="text"
                            placeholder="Enter name"
                            name="name"
                            required
                        />
                        </InputBody>
                  <InputBody>
                        <label>Email</label>
                        <input
                            onChange={handleInputChange}
                            className="input"
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            required
                        />
                  </InputBody>

                  <InputBody>
                        <label>Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Enter your password"
                            name="password"
                            onChange={handleInputChange}
                            required
                        />
                  </InputBody>
                  <InputBody>
                        <label>Name of school</label>
                        <select
                            onChange={handleInputChange}
                            className="input"
                            name="school"
                            placeholder="Type name of schools"
                         >
                            {schools.map((item) => (
                            <option key={item.id} value={item.name}>
                                {item.name}
                            </option>
                                 ))}
                        </select>
                    </InputBody>
                              
                        <ButtonWrapper>
                         <button
                            onClick={handleSubmit}
                            className="btn"
                            type="submit"
                            >
                            Sign up
                            </button>
                        </ButtonWrapper>

                        {/* social signup */}

                <LineSection>
                    <span></span><div>or</div> <span></span>
                </LineSection>
                <GoogleSignUpBox >
                    <ImageWrapper1 style={{background:"#fff"}}>
                        <img src={Google} alt="" />
                    </ImageWrapper1>
                    <GoogleSignUpLink to="/"> Sign Up with Google</GoogleSignUpLink>
                </GoogleSignUpBox>
                <AccountCheck>
                        <p>Already have an account?
                            <Link to="/login" style={{color:"#80B918",textDecoration:"none"}}> Sign In</Link>
                             </p>
                </AccountCheck>
                        </div>
              </form>
          </PageBody>
    </SignUpContainer>
  );
}


