import { useState, useEffect } from "react";
import SwapiAPI from "../services/SWAPI";
import "./People.css";

const People = () => {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    const people = await SwapiAPI.getPeople();
    setPeople(people.results);
    // console.log(people.results);
  };

  const peopleNames = people.map((person) => {
    console.log(person);
  });

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <div className="card-container">
        {people.map((person) => {
          return (
            <div className="card" key={person.name}>
              <h1>{person.name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default People;
