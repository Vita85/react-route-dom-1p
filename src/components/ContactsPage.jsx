import React from "react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Це сторінка контактів</h2>

      <button className="btn" onClick={goToHomePage}>
        Go to Home Page
      </button>
    </div>
  );
};

export default ContactPage;
