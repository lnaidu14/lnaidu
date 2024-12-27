import { About, Experience, Projects, Education, Skills, SideNav } from "../";
import "./Main.css";
import { useState, useEffect, useRef } from "react";

export function Main() {
  const [opacityValue, setOpacityValue] = useState(1);
  const interval = useRef(null);

  useEffect(() => {
    if (opacityValue > 0) {
      interval.current = setInterval(
        () => setOpacityValue((oldOpacityValue) => oldOpacityValue - 0.04),
        100
      );
    } else {
      clearInterval(interval.current);
      interval.current = null;
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [opacityValue]);
  const renderPage = (page) => {
    switch (page) {
      case "about":
        return <About />;
      case "exp":
        return <Experience />;
      case "edu":
        return <Education />;
      case "proj":
        return <Projects />;
      case "skills":
        return <Skills />;
    }
  };
  const [displayPage, setDisplayPage] = useState("about");
  return (
    <>
      <div className="main-container">
        <div className="fade-in" style={{ opacity: opacityValue }}></div>
        <SideNav setDisplayPage={setDisplayPage} />
        <div className="main-content">{renderPage(displayPage)}</div>
      </div>
    </>
  );
}
