const initialState = {
  loading: false,
  data: null,
  error: null,
};

const starWarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STAR_WARS_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        data: null,
        error: null,
      };
    case 'FETCH_STAR_WARS_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case 'FETCH_STAR_WARS_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    case 'CLEAR_STAR_WARS_DATA':
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };
    default:
      return state;
  }
};

export default starWarsReducer;
