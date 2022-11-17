import React from "react";
import { createGlobalStyle } from "styled-components";
import FirstSketch from "./p5/sketches/FirstSketch/FirstSketch";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <FirstSketch />
    </>
  );
}
