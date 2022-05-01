import SwapiAPI from "../services/SWAPI";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ReactPaginate from "react-paginate";
import "./Films.css";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPeople = async () => {
      setisLoading(true);
      const films = await SwapiAPI.getFilms();
      setFilms(films.results);
      setisLoading(false);
    };

    getPeople();
  }, [page]);

  return (
    <div className="films-component">
      {isLoading ? (
        <p>loading...</p>
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
      {
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.floor(films.length / 10)}
          marginPagesDisplayed={3}
          pageRangeDisplayed={3}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={
            Math.floor(films.length / 10) < 1
              ? "paginationButtonStyling"
              : "page-item"
          }
          previousLinkClassName={
            Math.floor(films.length / 10) < 1
              ? "paginationButtonLinkStyling"
              : "page-link"
          }
          nextClassName={
            Math.floor(films.length / 10) < 1
              ? "paginationButtonStyling"
              : "page-item"
          }
          nextLinkClassName={
            Math.floor(films.length / 10) < 1
              ? "paginationButtonLinkStyling"
              : "page-link"
          }
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      }
    </div>
  );
};

export default Films;
