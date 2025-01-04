import "./SideNav.css";
import { useState } from "react";
import hamburgerIcon from "../../assets/hamburger.png";
import profilePic from "../../assets/profile-pic.jpeg";

export function SideNav({ setDisplayPage }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  return (
    <>
      <nav className="side-nav">
        <div className="nes-btn hamburger" onClick={toggleHamburger}></div>
        <img
          className="profile-picture"
          alt="Lalit Naidu Profile Picture"
          src={profilePic}
        />
        {/* Interactions */}
        <div className="interactions">
          <p
            className="nes-btn interaction"
            onClick={() => {
              setDisplayPage("about");
              if (hamburgerOpen) setHamburgerOpen(false);
            }}
          >
            About
          </p>
          <p
            className="nes-btn interaction"
            onClick={() => {
              setDisplayPage("exp");
              if (hamburgerOpen) setHamburgerOpen(false);
            }}
          >
            Experience
          </p>
          <p
            className="nes-btn interaction"
            onClick={() => {
              setDisplayPage("proj");
              if (hamburgerOpen) setHamburgerOpen(false);
            }}
          >
            Projects
          </p>
          <p
            className="nes-btn interaction"
            onClick={() => {
              setDisplayPage("skills");
              if (hamburgerOpen) setHamburgerOpen(false);
            }}
          >
            Skills
          </p>
        </div>
      </nav>
      <style jsx>
        {`
          @media screen and (max-width: 1000px) {
            .side-nav {
              width: 100vw;
              height: ${hamburgerOpen ? "100vh" : "5.5rem"};
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            .hamburger {
              width: 5rem;
              height: 5rem;
              top: 0;
              left: 0;
              display: block;
              position: absolute;
              background-image: url("${hamburgerIcon}");
              background-size: 100% 100%;
              background-position: center center;
              background-repeat: no-repeat;
              z-index: 6;
            }

            .profile-picture {
              display: none;
            }

            .interactions {
              display: ${hamburgerOpen ? "flex" : "none"};
              flex-direction: column;
              flex-wrap: wrap;
              justify-content: center;
              align-items: center;
              width: 100vw;
              height: 100vh;
            }

            .interaction {
              width: ${hamburgerOpen ? "20rem" : "15rem"};
            }

            .main-content {
              display: ${hamburgerOpen ? "none" : "flex"};
              width: 100%;
            }
            .main-container {
              width: 100%;
              height: 100%;
              display: flex;
              float: left;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
}
