import React from "react";
import styled from "styled-components";

const ExtendingReactComponent = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <div className="underline"></div>
    </div>
  );
};

const Wrapper = styled(ExtendingReactComponent)`
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

export default Wrapper;
