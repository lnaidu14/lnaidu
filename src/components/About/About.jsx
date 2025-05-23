import "./About.css";
import resumePdf from "../../assets/Lalit.pdf";

export function About() {
  return (
    <>
      <div className="about-container">
        <h1>LALIT NAIDU</h1>
        <h3>SOFTWARE DEVELOPER</h3>
        <div className="subheading">
          {"Ottawa,Ontario,Canada |"}
          <a href="mailto:lalit.pratap.naidu@gmail.com">
            lalit.pratap.naidu@gmail.com
          </a>
        </div>
        <div className="about-content nes-container with-title">
          <p style={{ fontSize: "1em" }} className="title">
            Greetings!
          </p>
          <p>
            I am an enthusiastic software developer with a passion for
            development across the stack, improving the developer and user
            experience and solving problems.
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
          <a href={resumePdf} target="_blank">
            View Resume as PDF
          </a>
        </div>
      </div>
    </>
  );
}
