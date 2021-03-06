import { useState, useEffect } from "react";
import SwapiAPI from "../services/SWAPI";
import Button from "react-bootstrap/Button";
import "./ComponentStyling/People.css";
import { Link, useSearchParams } from "react-router-dom";
import { getIdFromUrl } from "../Helper/getIdFromUrl";
import Loader from "../components/Loader";

const PeopleContent = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [pageCount, setPageCount] = useState();

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
  });

  const page = searchParams.get("page");

  const getPeople = async () => {
    setisLoading(true);
    const people = await SwapiAPI.getPeople(page);
    setPageCount(Math.ceil(people.count / 10));
    setPeople(people.results);
    console.log(page);
    setisLoading(false);
  };

  useEffect(() => {
    getPeople();
  }, [page]);

  return (
    <div className="people-component">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="people-container">
          {people.map((person, index) => {
            return (
              <div
                className="card-container mb-5"
                key={getIdFromUrl(person.url)}
              >
                <div className="card-body">
                  <h1 className="ms-4">{person.name}</h1>
                  <ul>
                    <li>person: {index + 1}</li>
                    <li>
                      Gender:{" "}
                      {person.gender === "n/a" ? " unknown" : person.gender}
                    </li>
                    <li>Birth year: {person.birth_year}</li>
                    <li>In: {person.films.length + 1} films</li>
                    <Link to={`/people/${getIdFromUrl(person.url)}`}>
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
          <Button
            variant="primary"
            disabled={Number(page) === 1}
            onClick={() => setSearchParams({ page: Number(page) - 1 })}
          >
            Previous
          </Button>
        </div>
        <div className="page ps-4 pe-4">{page}</div>
        <div className="next">
          <Button
            variant="primary"
            disabled={Number(page) === pageCount}
            onClick={() => setSearchParams({ page: Number(page) + 1 })}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PeopleContent;
