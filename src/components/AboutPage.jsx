import React from "react";
import { useNavigate, Outlet, NavLink } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Про нас</h2>
      <div className="inner-nav">
        <NavLink to="team" activeClassName="active">
          Наша команда
        </NavLink>
        <NavLink to="project" activeClassName="active">
          Наші проєкти
        </NavLink>
      </div>

      <Outlet />

      <button className="btn" onClick={goToHomePage}>
        Go to Home Page
      </button>
    </div>
  );
};

export default AboutPage;
