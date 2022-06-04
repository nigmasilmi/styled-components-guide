import React from "react";
import styled from "styled-components";

const ThemedComp = ({ light }) => {
  return (
    <Wrapper>
      <h1>Themed {light ? "Light" : "Dark"}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  text-align: center;
  margin: 1rem auto;
  height: 10vh;
  width: 50vw;
  padding: 2rem;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

export default ThemedComp;
