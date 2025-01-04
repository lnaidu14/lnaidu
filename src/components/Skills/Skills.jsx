import "./Skills.css";

export function Skills() {
  return (
    <>
      <h2>SKILLS</h2>
      <div className="skills nes-container with-title is-centered">
        <p className="title">Primary Programming Languages</p>
        <span className="skill">
          <div>JavaScript | TypeScript | SQL</div>
        </span>
      </div>
      <div className="skills nes-container with-title is-centered">
        <p className="title">Secondary Programming Languages</p>
        <span className="skill">
          <div>Python | Golang</div>
        </span>
      </div>
      <div className="skills nes-container with-title is-centered">
        <p className="title">Cloud Providers and Services</p>
        <span className="skill">
          <div>
            Amazon Web Services (Lambda,ECS,ECR,API
            Gateway,SNS,SQS,Cognito,CloudWatch,IoT Core) | Microsoft Azure
            (Azure AD)
          </div>
        </span>
      </div>
      <div className="skills nes-container with-title is-centered">
        <p className="title">CICD</p>
        <span className="skill">
          <div>GitHub Actions | GitLab CICD | Terraform</div>
        </span>
      </div>
      <div className="skills nes-container with-title is-centered">
        <p className="title">Frameworks and Libraries</p>
        <span className="skill">
          <div>
            Node.js | Next.js | React.js | Fiber | Express.js | Jest | Prime
            React | Bootstrap | React Testing Library | Playwright | Cypress |
            Storybook | React Query | Jotai | Knex
          </div>
        </span>
      </div>
      <div className="skills nes-container with-title is-centered">
        <p className="title">Databases</p>
        <span className="skill">
          <div>PostgreSQL | MongoDB | SQLite</div>
        </span>
      </div>
      <div className="skills nes-container with-title is-centered">
        <p className="title">Tools</p>
        <span className="skill">
          <div>
            Docker | Git | Visual Studio Code | POSTMAN | Package Managers (npm,
            pip, go.mod)
          </div>
        </span>
      </div>
      <div className="skills nes-container with-title is-centered">
        <p className="title">Concepts</p>
        <span className="skill">
          <div>
            RESTful APIs | Serverless | Infrastructure as Code (IaC) | Agile
            Methodology (Scrum, Kanban) | Testing and Quality Assurance
          </div>
        </span>
      </div>
      <div className="skills nes-container with-title is-centered">
        <p className="title">Soft Skills</p>
        <span className="skill">
          <div>
            Teamwork | Collaboration | Written and Verbal Communication |
            Conflict Resolution
          </div>
        </span>
      </div>
    </>
  );
}
