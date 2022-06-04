import styled from "styled-components";

export const DefaultButton = styled.button`
  display: block;
  text-align: center;
  background-color: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  width: 200px;
  margin: 1rem auto;
`;

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
`;
