import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --primary: #f31f70;
  --secondary: #0ca4db;
  --globalBG: #f3f4f8;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--globalBG);
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.title {
  text-align: center;
  text-transform: uppercase;
}

.btn {
  display: block;
  text-align: center;
  background-color: var(--primary);
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  width: 200px;
  margin: 1rem auto;
}

.bg-grey {
  background: grey;
}

.title {
  text-transform: uppercase;
  color: var(--secondary);
}

`;

export default GlobalStyles;
