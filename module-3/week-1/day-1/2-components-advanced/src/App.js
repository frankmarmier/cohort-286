import "./App.css";
import CardCat from "./Components/CardCat";
import CardHuman from "./Components/CardHuman";
import NavMain from "./Components/NavMain";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <NavMain />
      <CardCat
        profileImage="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Didi"
        age={10}
      />
      <CardCat
        profileImage="https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Fifi"
        age={11}
      />

      <CardHuman
        name="John"
        age={28}
        profileImage="https://images.pexels.com/photos/4571943/pexels-photo-4571943.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />

      <ReactPlayer
        controls={true}
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </div>
  );
}

export default App;
