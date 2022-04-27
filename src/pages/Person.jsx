import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SwapiAPI from "../services/SWAPI";

const Person = () => {
  const { id } = useParams();
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const getPerson = async () => {
      const person = await SwapiAPI.getPerson(id);
      setPerson(person);
    };
    getPerson();
  }, []);

  return (
    <div className="">
      <p>{person.name}</p>
    </div>
  );
};

export default Person;
