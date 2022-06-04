import React from "react";
import styled from "styled-components";
import { colors, setupBorder } from "../utils";

const ExtendingReactComponent = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <div className="underline"></div>
      <div className="box">Custom border set with utils function</div>
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

  .box {
    margin: 1rem auto;
    width: 70%;
    text-align: center;
    padding: 3px;
    height: 2rem;
    border: ${setupBorder({
      thickness: 5,
      type: "solid",
      color: colors.primaryC,
    })};
  }
`;

export default Wrapper;
