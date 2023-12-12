import { Fragment, useState } from "react";
import MovieList from "./components/MovieList";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Forum from "./components/Forum";
import Filter from "./components/Filter";

function App() {
  const [Movies, setMovies] = useState([
    {
      id: 1,
      title: "The Shawshank Redemption",
      description:
        "Two convicts, forming a friendship over years, seek solace and eventual redemption through the power of basic compassion in prison.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      rating: 5,
    },
    {
      id: 2,
      title: "Gladiator",
      description:
        "A former Roman General seeks vengeance against the corrupt emperor who murdered his family, driving him into slavery—an epic tale of revenge.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      rating: 4,
    },
    {
      id: 3,
      title: "The Matrix",
      description:
        "Neo, a hacker, follows a stranger into a dark underworld, discovering a shocking truth about his life—a deceptive creation of evil cyber-intelligence.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      rating: 4,
    },
    {
      id: 4,
      title: "The Blind Side",
      description:
        "Michael Oher, a homeless boy, transforms into an All-American football player and NFL draft pick with support from a compassionate woman and her family.",
      posterURL:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bMgq7VBriuBFknXEe9E9pVBYGZq.jpg",
      rating: 4,
    },
  ]);
  const [filteredMovies, setFilteredMovies] = useState(Movies);
  const handleAddMovie = (newMovie) => {
    setMovies([...Movies, newMovie]);
  };
  const handleFilterChange = (searchText) => {
    const filtered = Movies.filter((Movie) =>
      Movie.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredMovies(filtered);
  };

  return (
    <Fragment>
      <Filter onFilterChange={handleFilterChange} />{" "}
      <Forum onAddMovie={handleAddMovie} />
      <Container className="mt-3">
        <Row>
          <MovieList Movies={filteredMovies} />
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
