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
        background: red;
        display: block;
        width: 100%;
        margin: 1rem auto;
        border-radius: 0%.25rem;
      `
    );
  }}
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
        <input type="text" />
        <Button type="submit">Submit here</Button>
      </form>
    </div>
  );
};

export default Form;
