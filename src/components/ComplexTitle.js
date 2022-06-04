import React from "react";
import styled from "styled-components";

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
`;

export default ComplexTitle;
