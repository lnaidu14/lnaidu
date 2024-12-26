import "./Loading.css";
import { useState, useEffect } from "react";
export function Loading({ setDisplayPage }) {
  const [progressBarValue, setProgressBarValue] = useState(0);
  const [opacityValue, setOpacityValue] = useState(0);
  useEffect(() => {
    if (progressBarValue === 100) {
      if (opacityValue >= 1) {
        setDisplayPage("main");
      }
      const id = setInterval(
        () => setOpacityValue((oldOpacityValue) => oldOpacityValue + 0.033),
        100
      );
      return () => {
        clearInterval(id);
      };
    }
    const id = setInterval(() => {
      setProgressBarValue((oldProgressBarValue) => oldProgressBarValue + 10);
    }, 100);

    return () => {
      clearInterval(id);
    };
  });
  return (
    <>
      <div className="loading">
        <div className="fade-out" style={{ opacity: opacityValue }}></div>
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
