import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";

function App() {
  return (
    <div>
      <BasicTitle>Basic</BasicTitle>
      <BasicTitle special>Special</BasicTitle>
      <BasicTitle destruct>Destruct</BasicTitle>
      <BasicTitle vary>Ternary</BasicTitle>
      <HipsterButton>HipsterButton</HipsterButton>
      <DefaultButton className="btn">Click me</DefaultButton>
    </div>
  );
}

export default App;
