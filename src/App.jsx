import { useState } from "react";
import "./App.css";
import { About, Experience, Projects, Education, Skills } from "./components";

function App() {
  const renderPage = (page) => {
    switch (page) {
      case "about":
        return <About />;
      case "exp":
        return <Experience />;
      case "edu":
        return <Education />;
      case "proj":
        return <Projects />;
      case "skills":
        return <Skills />;
    }
  };
  const [displayPage, setDisplayPage] = useState("about");
  return (
    <>
      <div className="main-container">
        <div className="side-nav">
          <img
            className="profile-picture"
            alt="Lalit Naidu Profile Picture"
            src="img/profile-pic.jpeg"
          />
          {/* Interactions */}
          <div className="interactions">
            <p
              className="nes-btn interaction"
              onClick={() => setDisplayPage("about")}
            >
              About
            </p>
            <p
              className="nes-btn interaction"
              onClick={() => setDisplayPage("exp")}
            >
              Experience
            </p>
            <p
              className="nes-btn interaction"
              onClick={() => setDisplayPage("edu")}
            >
              Education
            </p>
            <p
              className="nes-btn interaction"
              onClick={() => setDisplayPage("proj")}
            >
              Projects
            </p>
            <p
              className="nes-btn interaction"
              onClick={() => setDisplayPage("skills")}
            >
              Skills
            </p>
          </div>
        </div>
        <div className="main-content">{renderPage(displayPage)}</div>
      </div>
    </>
  );
}

export default App;
