import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SwapiAPI from "../services/SWAPI";
import "./ComponentStyling/Film.css";
import { getIdFromUrl } from "../Helper/getIdFromUrl";
import Loader from "./Loader";

const FilmDetails = () => {
  const [isLoading, setisLoading] = useState(false);
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const [people, setPeople] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getFilm = async () => {
      setisLoading(true);
      const film = await SwapiAPI.getFilm(id);
      setFilm(film);
      setPeople(film.characters);
      setisLoading(false);
    };
    getFilm();
  }, []);
  return (
    <div className="background-color">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="text-center film-header">{film.title}</h1>
          <div className="film-component">
            <div className="w-25">
              <h2 className="text-center">Film information</h2>
              <ul className=" d-flex flex-column align-content-center flex-wrap film-info-list">
                <li>Episode: {film.episode_id}</li>
                <li>Director: {film.director}</li>
                <li>Producer: {film.producer}</li>
                <li>Release date: {film.release_date}</li>
              </ul>
            </div>
            <div className="w-75 d-flex flex-column align-items-center">
              <h2>Character-list</h2>
              <div className="d-flex flex-wrap character-container justify-content-center ms-5">
                {people.map((person) => {
                  return (
                    <Link
                      key={getIdFromUrl(person)}
                      to={`/people/${getIdFromUrl(person)}`}
                      className="mt-5 me-5 character-link"
                    >
                      <div>Character: {getIdFromUrl(person)}</div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            className=" ms-5 btn btn-primary"
            onClick={() => navigate(-1)}
          >
            back
          </button>
        </div>
      )}
    </div>
  );
};

export default FilmDetails;
