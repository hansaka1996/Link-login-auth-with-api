import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
//import "./Loginpage";

function Homepage() {
  let navigate = useNavigate();
  let location = useLocation();
  console.log(location);
  return (
    <div className="home">
      <h3>Welcome {location.state.username} !</h3>
      <br />
      <input
        className="logout"
        type="button"
        value="Logout"
        onClick={() => navigate("/")}
      ></input>
    </div>
  );
}
export default Homepage;
