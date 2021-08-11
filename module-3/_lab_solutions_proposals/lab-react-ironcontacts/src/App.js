import React from "react";
import "./App.css";
import contactsFromJSON from "./contacts.json";
// you can name it whatever you want when you import it
// the important part is the relative path
// this is always true for json files because they do not have named exports

class App extends React.Component {
  state = {
    firstVisibleContacts: contactsFromJSON.slice(0, 5),
  };
  // Iteration 1 | Display 5 Contacts
  // Display that array of 5 contacts in a <table> and display the picture, name, and popularity of each contact.

  showContacts() {
    return this.state.firstVisibleContacts.map((eachContact, index) => {
      return (
        <tr key={eachContact.id}>
          <td>
            <img
              className="img-fluid img-thumbnail celebImg"
              src={eachContact.pictureUrl}
              alt={eachContact.name}
            />
          </td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity.toFixed(2)}</td>
          <td>
            <button
              className="btn btn-secondary"
              onClick={() => this.deleteContact(eachContact.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  // Iteration 2 | Add New Random Contacts
  // Create a Add Random Contact button so that every time you click on this button, it adds a new random actor.

  addRandomContact = () => {
    const max = contactsFromJSON.length;
    const min = 5;
    // Since we already took the first five contacts from the json file.
    // We have to find a randomIndex between 5 and then length of the json file.
    // This formulae allows us to do so.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    // Found on MDN  #Getting a random number between two values : ) .
    let randomIndex = Math.floor(Math.random() * (max - min) + min); // random number between 0 and contactsFromJSON.length (excluded)
    let randomContact = contactsFromJSON[randomIndex];

    // We look in our state array if the contact we randomly chose doesn't already exist.
    // If it's the case we call this.addRandomContact again
    const foundContact = this.state.firstVisibleContacts.find(
      (contact) => contact.id === randomContact.id
    );

    if (foundContact) {
      this.addRandomContact();
      return;
    }

    // Method 1
    // Create a copy of this.state.firstVisibleContacts
    let newList = [...this.state.firstVisibleContacts];
    // push or unshift in the copy you just created
    newList.unshift(randomContact);
    // save it in the state
    this.setState({
      firstVisibleContacts: newList,
    });

    // Method 2
    // this.setState({
    //   firstVisibleContacts: [...this.state.firstVisibleContacts, randomContact]
    // })
  };

  // Iteration 3 | Sort Contacts By Name And Popularity

  sortByName = () => {
    // this.state.contacts.slice() create a copy of the array (this.state.allContacts)
    this.setState({
      firstVisibleContacts: this.state.firstVisibleContacts
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name)),
    });
  };

  sortByPopularity = () => {
    // Method 1
    // const copy = [...this.state.firstVisibleContacts];
    // copy.sort((a, b) => a.popularity - b.popularity);
    // this.setState({
    //   firstVisibleContacts: copy,
    // });

    // Method 2

    this.setState({
      firstVisibleContacts: [...this.state.firstVisibleContacts].sort(
        (a, b) => a.popularity - b.popularity
      ),
    });
  };

  // Iteration 4 | Remove Contacts
  deleteContact = (theIDofTheOneToBeDeleted) => {
    //  Method 1
    this.setState({
      // filter creates a copy
      firstVisibleContacts: this.state.firstVisibleContacts.filter(
        (contact) => contact.id !== theIDofTheOneToBeDeleted
      ),
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <h1>
          IronContacts{" "}
          <span role="img" aria-label="heart">
            {" "}
            ❤️{" "}
          </span>
        </h1>
        <button className="btn btn-secondary" onClick={this.addRandomContact}>
          Add random
        </button>
        <button className="btn btn-primary" onClick={this.sortByPopularity}>
          Sort by popularity
        </button>
        <button className="btn btn-success" onClick={this.sortByName}>
          Sort by name
        </button>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>{this.showContacts()}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
