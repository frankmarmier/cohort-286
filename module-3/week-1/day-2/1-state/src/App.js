import Counter from "./Components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter name="John" />
      <Counter name="Zoe" />
      <Counter name="Susan" />
      <Counter name="Bob" />
    </div>
  );
}

export default App;
