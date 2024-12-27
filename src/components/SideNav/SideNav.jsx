import "./SideNav.css";

export function SideNav({ setDisplayPage }) {
  return (
    <>
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
    </>
  );
}
