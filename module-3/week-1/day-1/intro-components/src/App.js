import CardCat from "./Components/CardCat";
// import Title from "./Components/Title";
import "./App.css";

function App() {
  const jack = {
    owner: {
      name: "Franck",
      isGood: true,
    },
    age: 3,
    name: "Jack",
    profileImage:
      "https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  return (
    <div className="App">
      {/* <Title text="The text for the title" /> */}
      {/* <Title>zdhiudhid hziudh</Title>
      <Title>
        <span>Hello</span>
        <span>World</span>
      </Title> */}
      {/* <Card {...jack} /> */}
      <CardCat
        name={jack.name}
        profileImage={jack.profileImage}
        age={jack.age}
      />
      <CardCat
        profileImage="https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Didi"
        age={10}
        owner={{
          name: "Susan",
          isGood: false,
        }}
      />
      <CardCat
        profileImage="https://images.pexels.com/photos/821736/pexels-photo-821736.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        name="Fifi"
        age={11}
        owner={{
          name: "Abdoulaye",
          isGood: true,
        }}
      />
    </div>
  );
}

export default App;
