import React, { useEffect } from "react";
import './home.css'
import { Link } from "react-router-dom";
import Typed from "react-typed";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "tomato",
    fontWeight: "bold",
    margin: "1rem 6rem",
    ['@media only screen and (max-width: 600px)'] : {
      margin: "0 0 0 1rem"
    },
    textTransform: "uppercase",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: "1rem 6rem",
    ['@media only screen and (max-width: 600px)'] : {
      margin: "1rem"
    }
  },
  
}));

function Home() {

  useEffect(() => {

  }, []);
  const classes = useStyles();

  return (
    <div className="homeContainer">
      <div className="primary">
        <p className="titleName">Hello, I'm</p>
        <Typography className={classes.title} variant="h4">
        <Typed strings={["RAM SETHURAMAN"]} typeSpeed={80} />
      </Typography>
        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Software Engineer",
              "Full Stack Developer",
              "Backend Developer",
              "Cloud Engineer",
              "Competitive Coder",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
        <Link to="/projectlanding">
          <input type="button" className="primaryBtn" value="Learn More" />
        </Link>
      </div>

      <div className="secondary">
        <div className="avatarImg">
          <img width="100%" src='/assets/images/me.jpeg' alt="Ram Sethuraman" />
        </div>
        <div align="center" className="socialbtns">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/rams1996/" class="fa fa-lg fa-linkedin" target="_blank"></a>
            </li>
            <li>
              <a href="https://github.com/rams1996" class="fa fa-lg fa-github" target="_blank"></a>
            </li>
            <li>
              <a href="https://leetcode.com/ramsethuraman" class="fa fa-lg fa-code" target="_blank"></a>
            </li>
            <li>
              <a href="https://binarysearch.com/@/ramsethuraman" class="fa fa-lg fa-codepen" target="_blank"></a>
            </li>

            <li>
              <a href="https://drive.google.com/file/d/1BE30ghAvdJVT1VTYOmEN8XtZiWeuwYoL/view?usp=sharing" class="fa fa-lg fa-cloud" target="_blank"></a>
            </li>


          </ul>
        </div>
      </div>

    </div>
  );
}

export default Home;