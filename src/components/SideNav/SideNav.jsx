import "./SideNav.css";
import { useState } from "react";

export function SideNav({ setDisplayPage }) {
  const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);
  return (
    <>
      <div
        className="nes-btn hamburger"
        onClick={() => {
          console.log("isHamburgerToggled: ", isHamburgerToggled);
          setIsHamburgerToggled(!isHamburgerToggled);
        }}
      >
        <img className="hamburger" src="img/hamburger.png" alt="" />
      </div>
      <nav
        className="side-nav"
        style={
          isHamburgerToggled ? { display: "inline-block" } : { display: "none" }
        }
      >
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
      </nav>
    </>
  );
}
