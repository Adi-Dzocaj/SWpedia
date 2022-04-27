import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

/**
 * Get all films
 */
const getFilms = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/films`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    return {
      message: err.message,
    };
  }
};

/**
 * Get individual films
 */
const getFilm = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/films/${id}`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    return {
      message: err.message,
    };
  }
};

/**
 * Get all people
 */
const getPeople = async (page) => {
  try {
    const res = await axios.get(`${BASE_URL}/people/?page=${page}`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    return {
      message: err.message,
    };
  }
};

const getPerson = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/people/${id}`);
    return res.data;
  } catch (err) {
    return {
      message: err.message,
    };
  }
};

export default { getPeople, getPerson, getFilms, getFilm };
