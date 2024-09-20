import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate("/about");
  };
  return (
    <div className="container">
      <h2>Познайомтеся з нашими проєктами</h2>

      <button className="btn" onClick={goToAboutPage}>
        Go to About Page
      </button>
    </div>
  );
};

export default ProjectPage;
