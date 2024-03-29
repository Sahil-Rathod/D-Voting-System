import React from "react";
import img from "./votingbg.png";
const Login = (props) => {
  return (
    <div className="login-container">
      <div
        class="image"
        style={{
          backgroundImage: { img },
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="welcome-message">
          Welcome to JSPM's Decentralized Voting System
        </h1>
        <button className="login-button" onClick={props.connectWallet}>
          Login Metamask
        </button>
      </div>
    </div>
  );
};

export default Login;
