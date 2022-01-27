import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Loginpage = () => {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(null);
    axios
      .post("http://restapi.adequateshop.com/api/authaccount/login", values)
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
        navigate("/Homepage", {
          state: { username: response.data.data.Name },
        });
      });
  };

  return (
    <div className="mainbackground">
      <div className="main">
        <h1 className="login">User Login</h1>
        <form className="form1" onSubmit={handleSubmit}>
          <div>
            <div>
              <label className="label">Email</label>
            </div>
            <input
              className="userinput"
              type="text"
              placeholder="Type here"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <div>
              <label className="label">Password</label>
            </div>
            <input
              className="userinput"
              type="password"
              placeholder="Type here"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <div className="error">{message}</div>
            <br />
          </div>

          <div>
            <button className="submit" value="Login">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
