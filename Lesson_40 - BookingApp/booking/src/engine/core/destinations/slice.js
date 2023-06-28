// Ваш файл destinations.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setItems, setLoading } = destinationsSlice.actions;
export const selectors = Object.freeze({
  items: (state) => state.destinations.items,
  loading: (state) => state.destinations.loading,
});

// Thunk-экшен для получения данных с сервера
export const fetchDestinations = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('/path/to/db.json');
    const { destinations } = response.data; // Деструктуризация объекта response.data
    dispatch(setItems(destinations));
  } catch (error) {
    // Обработка ошибки запроса
  } finally {
    dispatch(setLoading(false));
  }
};

export default destinationsSlice.reducer;
