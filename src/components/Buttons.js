import styled, { css } from "styled-components";

export const DefaultButton = styled.button`
  display: block;
  text-align: center;
  background-color: var(--primary);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;

  margin: 1rem auto;
  ${({ large }) =>
    large
      ? css`
          width: 400px;
          padding: 1rem 0.75rem;
          text-transform: uppercase;
          font-size: 1.5rem;
          font-weight: bold;
        `
      : css`
          width: 200px;
          font-size: 1rem;
          font-weight: normal;
          padding: 0.25rem;
        `}
`;

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;
