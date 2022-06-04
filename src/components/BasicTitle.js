import styled from "styled-components";

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${(props) => props.special && `var(--primary)`};
  font-size: ${({ destruct }) => destruct && "2rem"};
  font-family: ${(props) => (props.vary ? "cursive" : "unset")};
`;

export default BasicTitle;
