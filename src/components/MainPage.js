import React from "react";
//import mwallet from "../mwallet.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <img src={null} alt="logo" className="frontPageLogo" />
        <h2> Hey There 👋 </h2>
        <h4 className="h4"> Welcome to AACESS Wallet</h4>
        <Button
          onClick={() => navigate("/yourwallet")}
          className="frontPageButton"
          type="primary"
        >
          Create A Wallet
        </Button>
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign In With Your Seed
        </Button>
      </div>
    </>
  );
}
export default MainPage;
