import "./App.css";
import { Main, Landing, Loading } from "./components";
import { useState } from "react";

function App() {
  const renderPage = (page, setDisplayPage) => {
    switch (page) {
      case "main":
        return <Main />;
      case "loading":
        return <Loading setDisplayPage={setDisplayPage} />;
      case "landing":
        return <Landing setDisplayPage={setDisplayPage} />;
    }
  };
  const [displayPage, setDisplayPage] = useState("landing");

  return (
    <>
      <div className="app-container">
        {renderPage(displayPage, setDisplayPage)}
      </div>
    </>
  );
}

export default App;
