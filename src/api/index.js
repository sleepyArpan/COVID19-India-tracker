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

export const fetchStates = async (state) => {
  try {
    const {
      data: { state_wise },
    } = await axios.get(`${url}`);

    const stateArray = Object.values(state_wise);
    if (state) {
      return stateArray.find((states) => states.state === state);
    } else {
      return stateArray.map((states) => states.state);
    }
  } catch (error) {
    console.log(error);
  }
};
