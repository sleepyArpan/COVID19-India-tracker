const axios = require('axios');

const url = 'https://akashraj.tech/corona/api_india';

export const fetchData = async () => {
  try {
    const {
      data: {
        total_values: { confirmed, deaths, recovered, lastupdatedtime },
      },
    } = await axios.get(`${url}`);
    return { confirmed, deaths, recovered, lastupdatedtime };
  } catch (error) {
    console.log(error);
  }
};
