import axios from "axios";

const BASE_URL = "https://swapi.dev/api/";

/**
 * Get all people
 */
const getPeople = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/people`);
    // console.log(res.data);
    return res.data;
  } catch (err) {
    return {
      message: err.message,
    };
  }
};

export default { getPeople };
