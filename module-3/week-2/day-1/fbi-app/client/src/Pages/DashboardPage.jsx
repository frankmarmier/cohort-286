import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class DashboardPage extends React.Component {
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

  handleDelete = (id) => {
    axios
      .delete("http://localhost:4000/api/fugitives/" + id)
      .then((apiResponse) => {
        console.log(apiResponse);

        this.setState({
          fugitives: this.state.fugitives.filter(
            (fugitive) => fugitive._id !== id
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Hello Dashboard</h1>
        <Link to="/dashboard/create">Create</Link>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Fullname</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {this.state.fugitives.map((fugitive) => {
              return (
                <tr>
                  <td>
                    {" "}
                    <img
                      style={{ width: 40, height: 40 }}
                      src={fugitive.picture}
                      alt={fugitive.firstName}
                    />{" "}
                  </td>
                  <td>
                    {fugitive.firstName} {fugitive.lastName}
                  </td>
                  <td>{fugitive.found ? "Found" : "Searching..."}</td>
                  <td>
                    <Link to={`/dashboard/${fugitive._id}/edit`}>Edit</Link>{" "}
                  </td>
                  <td>
                    <button onClick={() => this.handleDelete(fugitive._id)}>
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DashboardPage;
