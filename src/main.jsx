import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import pixelFont from "./assets/VCR_OSD_MONO_1.001.ttf";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <style jsx>
      {`
        @font-face {
          font-family: "VCR";
          src: local("VC"), url("${pixelFont}") format("truetype");
        }

        body {
          font-family: "VCR", sans-serif;
          font-size: 1.5em;
        }
      `}
    </style>
  </StrictMode>
);
