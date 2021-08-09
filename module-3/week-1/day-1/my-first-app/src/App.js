import something from "./assets/logo.svg";
import "./App.css"; // importing css
import React from "react";

function App() {
  function sayHello(name) {
    // return `Hello ${name}`;
    return <div>Hello {name}</div>;
  }

  const cohort = "Cohort n°286";

  const anArray = [1, 2, 3, 4, 5, 6];
  const anArrayWithSomeJSX = [<span>1</span>, <span>2</span>, <span>3</span>];

  const anObject = { firstName: "John", lastName: "Doe" };

  // comments over here stay the same

  const cat = {
    profileImage:
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Lola",
    age: 2,
  };

  const myStyle = {
    backgroundColor: false ? "red" : "dodgerblue",
  };

  return (
    <div className="App">
      <h1
        // style={{
        //   backgroundColor: false ? "red" : "dodgerblue",
        // }}
        style={myStyle}
      >
        Hello world
      </h1>
      <hr />

      <h2 className="something">Importing assests</h2>
      <p>From the public folder :</p>
      <img src="/images/image.jpeg" alt="" />
      <p>
        From the <code>src</code> folder
      </p>
      <img src={something} alt="" />

      <h2>Expressions :</h2>

      <p>Addition {2 + 2} </p>
      <p>Loves coding ? {true ? "yes" : "no"} </p>
      <p>{sayHello("Franck")}</p>
      <hr />
      <h2>
        There are some expressions that are not displayed/rendered to the DOM !
      </h2>

      <p>An undefined value :{undefined}</p>
      <p>An null value :{null}</p>
      <p>An boolean value :{true}</p>
      <p>An boolean value :{false}</p>

      <h2>All the other values are rendered / displayed to the DOM</h2>

      <p>An boolean value :{0}</p>
      <p>A string {"hello"}</p>

      <hr />
      <h2>Inserting variables</h2>

      <h3>{cohort}</h3>
      <p>{anArray}</p>
      <p>JSX ARRAY: {anArrayWithSomeJSX}</p>

      {/* 
          Objects are not  valid values inside JSX
        */}
      {/* <p>{anObject}</p> */}

      <p>
        Username : {anObject.firstName} {anObject.lastName}
      </p>

      <hr />
      <h2>
        Open up the inspector at look at this div, the React.Fragments are not
        <br />
        rendered to the DOM !
      </h2>
      <div>
        <React.Fragment>
          <React.Fragment>
            <React.Fragment>
              <React.Fragment>Hello</React.Fragment>
            </React.Fragment>
          </React.Fragment>
        </React.Fragment>
      </div>

      {/* const cat = {
    profileImage:
      "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Lola",
    age: 2,
  }; */}

      <div className="card">
        <img src="" alt="" />
        <p>Name</p>
        <p>Human age of the cat </p>
      </div>
    </div>
  );
}

export default App;
