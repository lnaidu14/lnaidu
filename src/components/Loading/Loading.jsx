import "./Loading.css";
import { useState, useEffect } from "react";
export function Loading({ setDisplayPage }) {
  const [progressBarValue, setProgressBarValue] = useState(0);
  useEffect(() => {
    if (progressBarValue === 100) {
      setDisplayPage("main");
    }
    const id = setInterval(
      () =>
        setProgressBarValue((oldProgressBarValue) => oldProgressBarValue + 10),
      100
    );

    return () => {
      clearInterval(id);
    };
  });
  return (
    <>
      <div className="loading">
        <p>Loading...</p>
        <progress
          className="nes-progress is-success progress-bar"
          value={progressBarValue}
          max="100"
        ></progress>
      </div>
    </>
  );
}
