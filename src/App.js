import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";
import MUIButtonExtended from "./components/MUIButtonExtended";

function App() {
  return (
    <div>
      <BasicTitle>Basic</BasicTitle>
      <BasicTitle special>Special</BasicTitle>
      <BasicTitle destruct>Destruct</BasicTitle>
      <BasicTitle vary>Ternary</BasicTitle>
      <HipsterButton>HipsterButton</HipsterButton>
      <DefaultButton className="btn">Click me</DefaultButton>
      <div style={{ textAlign: "center" }}>
        <MUIButtonExtended />
      </div>
    </div>
  );
}

export default App;
