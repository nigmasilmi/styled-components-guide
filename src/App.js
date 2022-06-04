import BasicTitle from "./components/BasicTitle";
import { DefaultButton, HipsterButton } from "./components/Buttons";
import MUIButtonExtended from "./components/MUIButtonExtended";
import ComplexTitle from "./components/ComplexTitle";
import ExtendingReactComponent from "./components/ExtendingReactComponent";
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
      <h2 style={{ textAlign: "center" }}>More complex implementations</h2>
      <ComplexTitle title={"i am wrapped"} />
      <ExtendingReactComponent title="Extending and utils constants" />
    </div>
  );
}

export default App;
