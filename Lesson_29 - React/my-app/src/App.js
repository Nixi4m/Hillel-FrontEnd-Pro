import React from 'react';
import Header from './components/Header.js';
import Navigation from './components/Navigation';
import Container from './components/Container';

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex-container">
        <Navigation />
        <Container />
      </div>
    </div>
  );
}

export default App;
