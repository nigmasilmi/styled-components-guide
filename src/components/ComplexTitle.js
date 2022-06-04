import React from "react";
import styled from "styled-components";

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper className="bg-grey">
      <h1>{title}</h1>
      <div className="underline"></div>
      <h2 className="title">Another title with global class</h2>
    </Wrapper>
  );
};

// this styles have priority over global classNames
// checkout bg-grey (index.css) and background value
// uncomment the selector .title to see another example
const Wrapper = styled.div`
  width: 70%;
  padding: 0.5rem;
  margin: 0 auto;
  h1 {
    text-transform: capitalize;
    text-align: center;
    color: #126d64;
  }
  .underline {
    width: 5rem;
    height: 0.35rem;
    background: #e72727c5;
    margin: 0 auto;
  }
  background: pink;
  /* .title {
    color: yellow;
  } */
`;

export default ComplexTitle;
