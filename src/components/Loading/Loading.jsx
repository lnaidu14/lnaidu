import "./Loading.css";
export function Loading({ setDisplayPage }) {
  return (
    <>
      <div className="loading">
        <p>Loading...</p>
        <progress
          className="nes-progress is-success progress-bar"
          value="50"
          max="100"
        ></progress>
      </div>
    </>
  );
}
