import "./Experience.css";

export function Experience() {
  return (
    <>
      <h2>EXPERIENCE</h2>
      <div className="experience">
        <span className="title-duration">
          <h3 className="title">Software Developer</h3>
          <h5 className="duration">January 2022 - March 2024</h5>
        </span>
        <h5 className="company">Irdeto,Ottawa,Ontario,Canada</h5>
        <div className="lists">
          <ul>
            <li>
              Designed the Irdeto Reference Cloud Application (IRCA), a
              customizable company themed full stack application based on
              Next.js and written in Typescript, to help teams jump-start their
              projects.
            </li>
            <li>
              Created an interactive and responsive frontend, for a Fleet
              Management System backend that supported asset management,
              routing, tracking asset state and metrics; using React Query and
              Jotai for data fetching and state management.
            </li>
            <li>
              Created an inventory management system using IRCA to track items
              donated to warehouse for supporting refugees. Used AWS SDK to
              integrate S3, Lambda and API Gateway to create an image uploading
              microservice for each piece of inventory and SNS for notifying
              volunteers on items given.
            </li>
            <li>
              Contributed to an Identity Management System for a BaaS product
              called IRIS that helped host and authenticate containerized
              applications built using Express.js and Knex and orchestrated by
              Kubernetes.
            </li>
            <li>
              Developed a standalone application-agnostic library featuring
              company themed UI components (using Prime React), helpers, context
              providers and utility functions.
            </li>
            <li>
              Designed a Role Based Access Model (RBAC) system to determine the
              resources and permissions associated with roles fetched from
              Auth0, Azure AD and Cognito for a user.
            </li>
            <li>
              Created an Admin tool which streamlined the process to create
              resources and assign permissions to roles based on the RBAC system
              with the model hosted on a Postgres database and queried with
              Prisma.
            </li>
            <li>
              Designed user management REST APIs and incorporated OAuth 2.0 and
              OIDC standards to integrate providers for authentication and
              authorization to access it using JWT tokens.
            </li>
            <li>
              Wrote Jest, Playwright and Storybook Interaction tests; Defined
              jobs in CI pipeline to ensure 75% coverage for the IRCA
              application and library.
            </li>
            <li>
              Implemented SonarQube to minimize bugs, code smells and track code
              coverage effectively.
            </li>
            <li>
              Integrated regression testing and quality gates through CI jobs,
              ensuring an overall coverage increase from 42% to 86% using
              Cypress (UI Testing) and Jest (Backend Testing).
            </li>
          </ul>
        </div>
      </div>
      <div className="experience">
        <div className="creds">
          <span className="title-duration">
            <h3 className="title">Full Stack Engineer</h3>
            <h5 className="duration">April 2021 - November 2021</h5>
          </span>
          <h5 className="company">Mobiux Labs,Bengaluru,Karnataka,India</h5>
        </div>
        <div className="lists">
          <ul>
            <li>Developed an e-learning platform frontend using Next.js.</li>
            <li>
              Built backend API's, integrated databases, models and serializers
              using Django + REST.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience">
        <div className="creds">
          <span className="title-duration">
            <h3 className="title">Quality Assurance Automation Engineer</h3>
            <h5 className="duration">February 2020 - November 2021</h5>
          </span>
          <h5 className="company">Mobiux Labs,Bengaluru,Karnataka,India</h5>
        </div>
        <div className="lists">
          <ul>
            <li>
              Wrote automated unit, integration, and E2E test cases using Jest,
              raising coverage from 65% to 92% for an Express.js, event-driven
              backend structured around AWS IoT Core.
            </li>
            <li>
              Utilized AWS CloudWatch to monitor and debug production system
              using queries and dashboards.
            </li>
            <li>
              Worked with AWS SDK to test and integrate a message queue using
              the SQS and SNS services.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
