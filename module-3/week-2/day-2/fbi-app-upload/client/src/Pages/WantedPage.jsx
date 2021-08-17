import React from "react";
import axios from "axios";

class WantedPage extends React.Component {
  state = {
    fugitives: [],
  };

  componentDidMount() {
    // GET http://localhost:4000/api/fugitives
    axios
      .get("http://localhost:4000/api/fugitives")
      .then((apiResponse) => {
        // console.log(apiResponse);
        this.setState({
          fugitives: apiResponse.data,
        });
      })
      .catch((error) => {});
  }

  render() {
    return (
      <div>
        <h1>Wanted Page !</h1>
        {this.state.fugitives.map((fugitive) => {
          return (
            <div key={fugitive._id}>
              <img src={fugitive.picture} alt={fugitive.name} />

              <h2>
                {fugitive.firstName} {fugitive.lastName}
              </h2>
              <p>{fugitive.lastSeen}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default WantedPage;
