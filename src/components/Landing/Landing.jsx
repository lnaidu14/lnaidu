import "./Landing.css";
import { useEffect } from "react";
import landingImg from "../../assets/pixel-resized.png";
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
      <style jsx>
        {`
          .bg-img {
            width: 1920px;
            height: 1080px;
            background-image: url("${landingImg}");
            background-size: 100% 100%;
            background-position: center center;
            background-repeat: no-repeat;
            text-align: center;
            margin: auto;
            padding: 0;
          }
        `}
      </style>
    </>
  );
}
