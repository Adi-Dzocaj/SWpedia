import SwapiAPI from "../services/SWAPI";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./ComponentStyling/Films.css";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

const FilmsContent = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();

  useEffect(() => {
    const getFilms = async () => {
      setisLoading(true);
      const films = await SwapiAPI.getFilms();
      setNextPage(films.next);
      setPreviousPage(films.previous);
      setFilms(films.results);
      setisLoading(false);
    };

    getFilms();
  }, [page]);

  return (
    <div className="films-component">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="films-container">
          {films.map((film, index) => {
            return (
              <div className="card-container" key={index}>
                <div className="card-body">
                  <h1 className="ms-4">{film.title}</h1>
                  <ul>
                    <li>Episode: {film.episode_id}</li>
                    <li>Release-date: {film.release_date}</li>
                    <li>{film.characters.length} characters</li>
                    <Link to={`/films/${index + 1}`}>
                      <Button className="mt-3 btn btn-primary">
                        Read more
                      </Button>
                    </Link>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="prev">
          <Button variant="primary" disabled={previousPage === null}>
            Previous
          </Button>
        </div>
        <div className="page ps-4 pe-4">{}</div>
        <div className="next">
          <Button variant="primary" disabled={nextPage === null}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilmsContent;
