import "./Projects.css";
import externalLinkIcon from "../../assets/external-link-pixel.png";

export function Projects() {
  return (
    <>
      <h2>PROJECTS</h2>
      <div className="project">
        <h3 className="title">Quickpay (ongoing)</h3>
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
          <ul>
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
        <h3 className="title">Infraez (ongoing)</h3>
        <h5 className="app-type">Infrastructure tool</h5>
        <h5 className="skills-used">
          Skills used: Typescript | Golang | REST | GitHub Actions | Docker
        </h5>
        <div className="link">
          <a href="https://github.com/lnaidu14/infraez" target="_blank">
            <i className="nes-icon github is-large"></i>
          </a>
        </div>
        <div className="lists">
          <ul>
            <li>
              Developing a infrastructure tooling application to set a user up
              with a customizable frontend, REST backend, database and
              authentication/authorization. Inspired by Supabase.
            </li>
            <li>
              Created a frontend built with Vite that is to be a distributed.
            </li>
            <li>
              Set up an interactive CLI tool built using Bubble Tea which helps
              with setup of the infrastrucutre needed.
            </li>
            <li>
              Built a server using Express to distribute the infrastructure.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
