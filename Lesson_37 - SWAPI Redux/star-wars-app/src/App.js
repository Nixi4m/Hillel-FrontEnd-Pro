import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStarWarsData, clearStarWarsData } from './actions/starWarsActions';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.starWars);

  const handleSearch = () => {
    dispatch(fetchStarWarsData(searchTerm));
  };

  const handleClear = () => {
    dispatch(clearStarWarsData());
    setSearchTerm('');
  };

  return (
    <div>
      <h1>Star Wars API Interface</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Clear</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
        </div>
      )}
    </div>
  );
}

export default App;
