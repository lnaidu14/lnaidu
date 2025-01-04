import "./Projects.css";
import externalLinkIcon from "../../assets/external-link-pixel.png";

export function Projects() {
  return (
    <>
      <h2>PROJECTS</h2>
      <div className="project">
        <h3 className="title">Quickpay (W.I.P)</h3>
        <h5 className="app-type">Android Application</h5>
        <h5 className="skills-used">
          Skills used: Typescript | Golang | Fiber | React Native | REST |
          Docker | PostgreSQL | GitHub Actions
        </h5>
        <div className="link">
          <a
            href="https://github.com/users/lnaidu14/projects/1"
            target="_blank"
          >
            <i className="nes-icon github is-large"></i>
          </a>
        </div>
        <div className="lists">
          <ul className="nes-list is-disc">
            <li>
              Developed a payments applicaton that allows for transactions
              between users via QR codes and fetch user balance.
            </li>
            <li>
              QR codes (which consist of JSON data) are encrypted and decrypted
              using the AES256 algorithm (creation, encryption and decryption
              are all done by the backend).
            </li>
            <li>
              Supports scanning of encrypted QR codes for making payments.
            </li>
            <li>
              Integrated a PostgreSQL database using Docker and used the "pgx"
              driver to query the database and store user and transaction data.
            </li>
            <li>
              Integrated Auth0 to create and store users and to have a login
              flow for authentication and authorization. Integrated the Google
              Identity Provider for authentication and authorization.
            </li>
            <li>
              Frontend built using React Native + Expo, using react-native-paper
              for the UI components and react-native-navigation for app
              navigation.
            </li>
          </ul>
        </div>
      </div>
      <div className="project">
        <h3 className="title">TechnoDevelop Corporation</h3>
        <h5 className="app-type">Web Application</h5>
        <h5 className="skills-used">
          Skills used: JavaScript | React | Prime React | GitHub Actions
        </h5>
        <div className="link">
          <a href="https://technodevelop.com/" target="_blank">
            <img src={externalLinkIcon} alt="TechnoDevelop Corporation" />
          </a>
        </div>
        <div className="lists">
          <ul className="nes-list is-disc">
            <li>
              Built a static frontend React application for a consultancy to
              highlight their work and accomplishments.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
