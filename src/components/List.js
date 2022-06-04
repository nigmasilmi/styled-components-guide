import React from "react";
import styled, { css } from "styled-components";

const Item = styled.li`
  list-style-type: none;
  ${({ odd }) => {
    return odd
      ? css`
          color: white;
          margin: 2rem;
          background: red;
          font-size: 1.5rem;
          padding: 1.5rem;
        `
      : css`
          color: var(--secondary);
          margin: 2rem;
          font-size: 1.5rem;
          padding: 1.5rem;
        `;
  }}
`;

const fruits = ["apple", "grapes", "banana", "peach"];

const List = () => {
  return (
    <ul>
      {fruits.map((ele, index) => (
        <Item key={ele} odd={(index + 1) % 2 !== 0}>
          {ele}
        </Item>
      ))}
    </ul>
  );
};

export default List;
