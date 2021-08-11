import React from "react";

class MoviesTable extends React.Component {
  //   state = {
  //     isClicked: false,
  //   };

  render() {
    return (
      <table
        onClick={this.props.toto}
        style={{
          backgroundColor: this.props.isClicked ? "black" : "white",
          color: this.props.isClicked ? "white" : "black",
        }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Director</th>
            <th>Description</th>
            <th>Amount of movies {this.props.movies.length}</th>
          </tr>
        </thead>

        <tbody>
          {this.props.movies.map((movie) => {
            return (
              <tr key={movie.title}>
                <td>
                  <img src={movie.image} alt={movie.name} />
                </td>
                <td>{movie.title}</td>
                <td>{movie.director}</td>
                <td>{movie.description}</td>
                <td>
                  {/* <button onClick={() => this.props.onDelete(movie.title)}>
                    Delete
                  </button>{" "} */}
                  <button onClick={() => this.props.onDelete(movie.title)}>
                    Delete
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
