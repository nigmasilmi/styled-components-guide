import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global-styles";
import { LightTheme, DarkTheme } from "./theme";

import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";
import MUIButtonExtended from "./components/MUIButtonExtended";
import ComplexTitle from "./components/ComplexTitle";
import ExtendingReactComponent from "./components/ExtendingReactComponent";
import Card from "./components/Card";
import ThemedComp from "./components/ThemedComp";
import React from "react";
import AnimationSpinner from "./components/AnimationSpinner";

function App() {
  const [lightTheme, setLightTheme] = useState(true);
  const switchThemeHandler = () => {
    setLightTheme((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={lightTheme ? LightTheme : DarkTheme}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GlobalStyles />
        <BasicTitle>Basic</BasicTitle>
        <BasicTitle special>Special</BasicTitle>
        <BasicTitle destruct>Destruct</BasicTitle>
        <BasicTitle vary>Ternary</BasicTitle>
        <HipsterButton>HipsterButton</HipsterButton>
        <DefaultButton className="btn">Click me</DefaultButton>
        <div style={{ textAlign: "center" }}>
          <MUIButtonExtended />
        </div>
        <h2 style={{ textAlign: "center" }}>More complex implementations</h2>
        <ComplexTitle title={"i am wrapped"} />
        <ExtendingReactComponent title="Extending and utils constants" />
        <h2 className="title">Making a card</h2>
        <Card />
        <ThemedComp light={lightTheme} />
        <button className="btn" onClick={switchThemeHandler}>
          Switch Theme
        </button>
        <h2 style={{ textAlign: "center" }}>Animations: Spinner</h2>
        <AnimationSpinner />
      </div>
    </ThemeProvider>
  );
}

export default App;
