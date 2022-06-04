import React from "react";
import styled from "styled-components";
import { colors } from "../utils";

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
    color: ${colors.secondaryC};
  }
  .underline {
    width: 5rem;
    height: 0.35rem;
    background: ${colors.primaryC};
    margin: 0 auto;
  }
`;

export default Wrapper;
