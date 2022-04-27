import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SwapiAPI from "../services/SWAPI";
import "./Film.css";

const Film = () => {
  const { id } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    const getFilm = async () => {
      const film = await SwapiAPI.getFilm(id);
      setFilm(film);
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
      </div>
    </div>
  );
};

export default Film;
