import "./Landing.css";
export function Landing({ setDisplayPage }) {
  return (
    <>
      <div
        className="landing-container"
        onClick={() => setDisplayPage("loading")}
      >
        <h3 className="press-start">CLICK ANYWHERE TO START</h3>
        <div className="bg-img"></div>
      </div>
    </>
  );
}
