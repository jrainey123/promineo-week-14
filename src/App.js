import './App.css';
import movieListData from './components/Movie';
import MovieData from './components/MovieList';

function App() {
  const movieList = movieListData.map(movie => {
    return (
      <MovieData
        key={movie.id}
        movie={movie}
      />
    )
  })
  return (
    <div className="App">
      <div className="container">
        <h2>Movie Reviews</h2>
        <section className="card-container">{movieList}</section>
      </div>
    </div>
  );
}

export default App;
