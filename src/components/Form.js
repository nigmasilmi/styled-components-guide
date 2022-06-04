import React from "react";
import styled, { css } from "styled-components/macro";

const Button = styled.button.attrs((props) => {
  return { type: props.type ? props.type : "button" };
})`
  background: var(--secondary);
  border: none;
  color: white;
  padding: 1rem 0.75rem;
  text-transform: uppercase;
  font-size: 1rem;
  cursor: pointer;
  border-top-right-radius: 0.75rem;
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        background: #ff00e1;
        color: black;
        display: block;
        width: 100%;
        margin: 1rem auto;
        border-radius: 0.25rem;
      `
    );
  }}
`;

const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type ? props.type : "text",
    placeholder: props.placeholder || "Please enter a value",
  };
})`
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #e1dede;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
`;

const Form = () => {
  return (
    <div>
      <Button>Click</Button>
      <form
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <BasicInput type="text" placeholder="your name" />
        <BasicInput type="email" placeholder="your email" />
        <BasicInput type="password" placeholder="your password" />
        <BasicInput type="text" />

        <Button type="submit">Submit here</Button>
      </form>
    </div>
  );
};

export default Form;
