import React from "react";
import { styled } from "@mui/material/styles";

import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  text-transform: lowercase;
  margin: 1rem;
  background-color: var(--secondary);
  color: white;
  width: 60%;
  :hover {
    background-color: yellow;
  }
`;

const MUIButtonExtended = () => {
  return (
    <div>
      <Button variant="contained">Plain MUI</Button>
      <StyledButton>Styled MUI Button</StyledButton>
    </div>
  );
};

export default MUIButtonExtended;
