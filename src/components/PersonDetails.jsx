import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SwapiAPI from "../services/SWAPI";
import { getIdFromUrl } from "../Helper/getIdFromUrl";
import "./ComponentStyling/Person.css";
import Loader from "../components/Loader";

const PersonDetails = () => {
  const [isLoading, setisLoading] = useState(false);
  const { id } = useParams();
  const [person, setPerson] = useState([]);
  const [films, setFilms] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getPerson = async () => {
      setisLoading(true);
      const person = await SwapiAPI.getPerson(id);
      setPerson(person);
      setFilms(person.films);
      console.log(films);
      setisLoading(false);
    };
    getPerson();
  }, []);
  return (
    <div className="person-container">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1 className="mb-5">{person.name}</h1>
          <div className="d-flex">
            <div className="top-left-side">
              <h3>
                <b>Gender:</b>
              </h3>
              <h3>
                <b>Birth Year:</b>
              </h3>
              <h3>
                <b>Height:</b>
              </h3>
              <h3>
                <b>Mass:</b>
              </h3>
              <h3>
                <b>Hair color:</b>
              </h3>
              <h3>
                <b>Skin color:</b>
              </h3>
              <h3>
                <b>Eye color:</b>
              </h3>
            </div>
            <div className="top-right-side">
              <h3>{person.gender}</h3>
              <h3>{person.birth_year}</h3>
              <h3>{person.height}</h3>
              <h3>{person.mass}</h3>
              <h3>{person.hair_color}</h3>
              <h3>{person.skin_color}</h3>
              <h3>{person.eye_color}</h3>
            </div>
          </div>
          <h2 className="mt-5">Links</h2>
          <div className="d-flex mt-5">
            <div className="bottom-left-side">
              <h3>Films</h3>
            </div>
            <div className="bottom-right-side">
              {films.map((film) => {
                return (
                  <Link
                    key={getIdFromUrl(film)}
                    to={`/films/${getIdFromUrl(film)}`}
                  >
                    <div>Film {getIdFromUrl(film)}</div>
                  </Link>
                );
              })}
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            back
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonDetails;
