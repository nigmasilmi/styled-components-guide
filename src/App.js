import { useState } from "react";
import styled from "styled-components/macro";
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
        <h2>Animations: Spinner</h2>
        <AnimationSpinner />
        <h2>AS prop</h2>
        <HipsterButton as="a" href="https://google.com">
          I am a link
        </HipsterButton>
        <h2>macro css</h2>
        <div
          css={`
            color: green;
          `}
        >
          <h3>directly in the element props</h3>
          <BasicTitle
            vary
            css={`
              color: aqua;
            `}
          >
            in styled components
          </BasicTitle>
        </div>
        <h2>css helper function</h2>
        <DefaultButton large className="btn">
          I am a large button
        </DefaultButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
