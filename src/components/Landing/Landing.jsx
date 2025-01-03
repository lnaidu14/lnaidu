import "./Landing.css";
import { useEffect, useState } from "react";
export function Landing({ setDisplayPage }) {
  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("visited"));
    if (visited) {
      setDisplayPage("main");
    }
  }, []);
  return (
    <>
      <div
        className="landing-container"
        onClick={() => {
          localStorage.setItem("visited", JSON.stringify(true));
          setDisplayPage("loading");
        }}
      >
        <h3 className="press-start">CLICK ANYWHERE TO START</h3>
        <div className="bg-img"></div>
      </div>
    </>
  );
}
