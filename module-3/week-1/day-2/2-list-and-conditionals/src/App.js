import "./App.css";
import Guards from "./Components/Conditionals/Guards";

import Ternary from "./Components/Conditionals/Ternary";
import SimpleList from "./Components/SimpleList";
import StateList from "./Components/StateList";

function App() {
  return (
    <div className="App">
      <h1>Simple List</h1>
      <SimpleList />
      {/* <Ternary value={true} />
      <Ternary value={false} />

      <Guards value={true} /> */}

      <StateList />
    </div>
  );
}

export default App;
