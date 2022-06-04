# styled-components

[Go](https://styled-components.com/)

## More on Template Literals and Tagged Template Literals

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
[freeCodeCamp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

## use MUI components with styled-components

- install @mui/material and @mui/styled-engine
- import { styled } from "@mui/material/styles";
- extend as usual (See MUIButtonExtended.js)

## macro css

- compatibility: styled-components 5.1 (check the change in package.json)
- where it is going to be used `import styled from "styled-components/macro";` and use the css prop normally
- importing in that wy for the normal use of styled, will give more friendly class names
