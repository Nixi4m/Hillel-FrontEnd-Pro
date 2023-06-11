import axios from 'axios';

const SWAPI_BASE_URL = 'https://swapi.dev/api';

export const fetchStarWarsData = (searchTerm) => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_STAR_WARS_DATA_REQUEST' });
    axios
      .get(`${SWAPI_BASE_URL}/people/?search=${searchTerm}`)
      .then((response) => {
        dispatch({
          type: 'FETCH_STAR_WARS_DATA_SUCCESS',
          payload: response.data.results[0],
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_STAR_WARS_DATA_FAILURE',
          payload: error.message,
        });
      });
  };
};

export const clearStarWarsData = () => {
  return {
    type: 'CLEAR_STAR_WARS_DATA',
  };
};
