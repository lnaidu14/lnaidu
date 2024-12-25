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
      <div className="main-container nes-pointer">
        <div className="side-content">
          {/* Interactions */}
          <div className="interactions">
            <div className="interaction">
              <i className="nes-icon is-large star"></i>
              <p className="nes-btn" onClick={() => setDisplayPage("about")}>
                About
              </p>
            </div>
            <div className="interaction">
              <i className="nes-icon is-large star"></i>
              <p className="nes-btn" onClick={() => setDisplayPage("exp")}>
                Experience
              </p>
            </div>
            <div className="interaction">
              <i className="nes-icon is-large star"></i>
              <p className="nes-btn" onClick={() => setDisplayPage("edu")}>
                Education
              </p>
            </div>
            <div className="interaction">
              <i className="nes-icon is-large star"></i>
              <p className="nes-btn" onClick={() => setDisplayPage("proj")}>
                Projects
              </p>
            </div>
            <div className="interaction">
              <i className="nes-icon is-large star"></i>
              <p className="nes-btn" onClick={() => setDisplayPage("skills")}>
                Skills
              </p>
            </div>
          </div>
        </div>
        <div className="main-content">{renderPage(displayPage)}</div>
      </div>
    </>
  );
}

export default App;
