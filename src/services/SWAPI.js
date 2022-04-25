import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

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

const getPerson = async (index) => {
  try {
    const res = await axios.get(`${BASE_URL}/people/${index}`);
    return res.data;
  } catch (err) {
    return {
      message: err.message,
    };
  }
};

export default { getPeople, getPerson };
