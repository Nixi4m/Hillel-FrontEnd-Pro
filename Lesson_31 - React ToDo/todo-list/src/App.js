import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Contacts from './ui/pages/Contacts';
import About from './ui/pages/About';
import ErrorBoundary from './ui/components/ErrorBoundary';
import Header from './ui/components/Header';
import Main from './ui/pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header
          homeLink={<Link to="/">Головна</Link>}
          contactsLink={<Link to="/contacts">Контакти</Link>}
          aboutLink={<Link to="/about">Про мене</Link>}
        />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
};

export default App;

