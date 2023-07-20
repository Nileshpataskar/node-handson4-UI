import React, { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(typeof email);

  const navigate = useNavigate();
  // const HandelChange = (e) => {
  //   setInfo({ [e.target.name]: e.target.value });
  // };
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backend-g6ha.onrender.com/api/user/login",
        { email, password }
      );

      // setInfo({
      //   email: "",
      //   password: "",
      // });
      const data = response.data;

      localStorage.setItem("token", data.token);

      console.log(data);
      console.log("user Logged in")
      navigate("/signup")
    } catch (err) {
      console.log("error in try",err);
    }

  };

  return <div className="signin-container">

    <h2>Sign In</h2>

    <form className="signup-form" onSubmit={handleSubmit}>

    <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value);
          }}
          required
        />
            <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          required
        />
         <button type="submit" onClick={handleSubmit}>Sign Up</button>
         <p onClick={()=>{navigate("/signup")}}>New User! Register</p>
    </form>
  </div>;
};

export default Signin;
