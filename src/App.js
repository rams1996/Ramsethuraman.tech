import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// Components
import ParticleComponent from "./components/particle/Particle";
import NavBar from './components/navbar/navbar';
import Home from './components/home/home';
import About from "./components/about/about";
import ProjectSDE from "./components/projectsde/projectsde";
import Contact from "./components/contact/contact";
import ProjectLanding from "./components/project-landing/project-landing"
import WebDevelopment from "./components/webdevelopment/webdevelopment"
import CodingProfile from "./components/codingprofile/codingprofile"

function App() {
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh"
        }}
      >
        <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >

          <Router>
            <div className="mainContainer">
              <div className="navBar">
                <NavBar />
              </div>

              <div className="contentBox">
                <Switch>

                  <Route path="/contact">
                    <Contact />
                  </Route>
                  <Route path="/projectlanding">
                    <ProjectLanding />
                  </Route>
                  <Route path="/projectsde">
                    <ProjectSDE />
                  </Route>
                  <Route path="/webdevelopment">
                    <WebDevelopment />
                  </Route>
                  <Route path="/codingprofile">
                    <CodingProfile />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>

                  <Route path="/">
                    <Home />
                  </Route>

                </Switch>
              </div>

              {/* <NavBar /> */}
            </div>
            
          </Router>
          
        </div>
      </div>
    </div>
  );
}

export default App;
