import React from "react";
import FormMovies from "../Components/FormMovies";
import MoviesTable from "../Components/MoviesTable/MoviesTable";
import moviesJSON from "../data/movies.json";

class Movies extends React.Component {
  state = {
    movies: moviesJSON,
    searchValue: "",
  };

  handleDelete = (title) => {
    this.setState({
      movies: this.state.movies.filter((movie) => {
        return movie.title !== title;
      }),
    });
  };

  handleAddMovie = (movie) => {
    this.setState({
      movies: [movie, ...this.state.movies],
    });
  };

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    const filteredMovies = this.state.movies.filter((movie) => {
      return movie.title.startsWith(this.state.searchValue);
    });

    return (
      <div>
        <SearchBar
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <FormMovies onSubmit={this.handleAddMovie} />
        <MoviesTable
          isClicked={this.props.isClicked}
          toto={this.props.foo}
          onDelete={this.handleDelete}
          movies={filteredMovies}
        />
      </div>
    );
  }
}

export default Movies;

class SearchBar extends React.Component {
  render() {
    return <input value={this.props.value} onChange={this.props.onChange} />;
  }
}
