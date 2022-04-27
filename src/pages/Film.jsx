import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SwapiAPI from "../services/SWAPI";
import "./Film.css";
import { getIdFromUrl } from "../Helper/getIdFromUrl";

const Film = () => {
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getFilm = async () => {
      const film = await SwapiAPI.getFilm(id);
      setFilm(film);
      setPeople(film.characters);
    };
    getFilm();
  }, []);

  return (
    <div className="film-component">
      <div>
        <h1 className="text-center mt-2">{film.title}</h1>
        <ul>
          <li>Episode: {film.episode_id}</li>
          <li>Director: {film.director}</li>
          <li>Producer: {film.producer}</li>
          <li>Release date: {film.release_date}</li>
        </ul>
        <ul>
          {people.map((person) => {
            return (
              <Link
                key={getIdFromUrl(person)}
                to={`/person/${getIdFromUrl(person)}`}
              >
                <li>Character: {getIdFromUrl(person)}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Film;
