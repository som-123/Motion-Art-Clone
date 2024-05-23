import "./App.css";
import { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Fluid from "webgl-fluid";

export default function App() {
  const canvas = useRef(null);

  useEffect(function () {
    let c = canvas.current;
    Fluid(c);
  }, []);

  return (
    <>
      <Navbar />
      <canvas ref={canvas} style={{ width: "100%", height: "100%" }}></canvas>
      <Body />
    </>
  );
}
