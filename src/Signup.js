import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ [e.target.name]: e.target.value });
  };
  async function handleSubmit(e) {
    // token =
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://node-assign4-data.onrender.com/Client/signup",
        data
      );

      // {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // },

      setData({
        name: "",
        email: "",
        phone: "",
        password: "",
      });

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={data.password}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={handleSubmit}>Sign Up</button>

        <p
          onClick={() => {
            navigate("/signin");
          }}
          className="shift"
        >
          Already User! Log in
        </p>
      </form>
    </div>
  );
};

export default Signup;
