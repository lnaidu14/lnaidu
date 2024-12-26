import "./About.css";

export function About() {
  return (
    <>
      <div className="about-container">
        <h1>LALIT NAIDU</h1>
        <h3>SOFTWARE DEVELOPER</h3>
        <div className="subheading">
          {"Ottawa,Ontario,Canada ·"}
          <a href="mailto:lalit.pratap.naidu@gmail.com">
            lalit.pratap.naidu@gmail.com
          </a>
        </div>
        <div className="about-content nes-container with-title">
          <p className="title">Greetings!</p>
          <p>
            I am an enthusiastic software developer with a passion for backend
            development, improving the developer and user experience and solving
            problems.
          </p>

          {/* Social Media Links */}
          <div className="social-media-links">
            <div className="social-media-link">
              <a href="https://www.linkedin.com/in/lnaidu14/" target="_blank">
                <i className="nes-icon linkedin is-large"></i>
              </a>
            </div>
            <div className="social-media-link">
              <a href="https://github.com/lnaidu14" target="_blank">
                <i className="nes-icon github is-large"></i>
              </a>
            </div>
          </div>
          <a href="docs/Lalit.pdf" target="_blank">
            View Resume as PDF
          </a>
        </div>
      </div>
    </>
  );
}
