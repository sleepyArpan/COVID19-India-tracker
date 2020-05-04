const axios = require('axios');

const url = 'https://akashraj.tech/corona/api_india';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${url}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
