import { useState, useEffect } from "react";
import SwapiAPI from "../services/SWAPI";
import Button from "react-bootstrap/Button";
import "./People.css";
import ReactPaginate from "react-paginate";
import { useSearchParams, Link } from "react-router-dom";

const People = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getPeople = async () => {
      setisLoading(true);
      const people = await SwapiAPI.getPeople(page);
      setPeople(people.results);
      setisLoading(false);
      setSearchParams({ page: page });
    };

    getPeople();
  }, [page]);

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  return (
    <div className="people-component">
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="people-container">
          {people.map((person, index) => {
            return (
              <div className="card-container" key={index}>
                <div className="card-body">
                  <h1 className="ms-4">{person.name}</h1>
                  <ul>
                    <li>person: {index + 1}</li>
                    <li>
                      Gender:
                      {person.gender === "n/a" ? "unknown" : person.gender}
                    </li>
                    <li>Birth year:{person.birth_year}</li>
                    <li>In: {person.films.length + 1} films</li>
                    <Link to={`/person/${index + 1}`}>
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
      {
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={9}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      }
    </div>
  );
};

export default People;
