import React from "react";
import './project-landing.css'
import { Link } from "react-router-dom";

function ProjectLanding() {
  return (
    <div align="top" className="homeContainer">

      <div className="secondary">
        <Link to="/projectsde">
          <div className="avatarImg">
            <img width="100%" src='/assets/images/SDE.png' alt="Ram" />
          </div>
          <div align="center" className="socialbtns">

            <p className="infoText2">Software Engineering Projects </p>
            <input type="button" className="primaryBtn" value="Enter" />
          </div>
        </Link>

      </div>
      <div className="secondary">
        <Link to="/webdevelopment">
          <div className="avatarImg">
            <img width="100%" src='/assets/images/ML.jpg' alt="Ram" />
          </div>
          <div align="center" className="socialbtns">
            <p className="infoText2">Full Stack Web Development projects</p>
            <input type="button" className="primaryBtn" value="Enter" />
          </div>
        </Link>

      </div>
      <div className="secondary" align="top">
        
          <Link to="/codingprofile">
            <div className="avatarImg">
              <img width="100%" src='/assets/images/CompetitiveCoding.png' alt="Ram" />
            </div>
            <div align="center" className="socialbtns">
              <p className="infoText2">Data Structures and Problem Solving</p>
              <input type="button" className="primaryBtn" value="Enter" />
            </div>
          </Link>

       
      </div>
    </div>
  );
}

export default ProjectLanding;