export function About() {
  return (
    <>
      <h1>LALIT NAIDU</h1>
      <h3>SOFTWARE DEVELOPER</h3>
      <div className="subheading">
        {"Ottawa, Ontario, Canada ·"}
        <a href="mailto:lalit.pratap.naidu@gmail.com">
          lalit.pratap.naidu@gmail.com
        </a>
      </div>
      <div className="about-content nes-container with-title is-centered">
        <p className="title">Greetings!</p>
        <p>
          My name is Lalit Naidu. I am a software developer with a passion for
          backend development and improving the developer and user experience.
        </p>

        {/* Social Media Links */}
        <div className="social-media-links">
          <div className="social-media-link">
            <a href="https://www.linkedin.com/in/lnaidu14/">
              <i className="nes-icon linkedin is-large"></i>
            </a>
            <a href="https://github.com/lnaidu14">
              <i className="nes-icon github is-large"></i>
            </a>
          </div>
        </div>
        <a href="docs/Lalit-Resume-fullstack.pdf" target="_blank">
          View Resume as PDF
        </a>
      </div>
    </>
  );
}
