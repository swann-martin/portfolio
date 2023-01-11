import React, { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/swann-martin/repos')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((repos) => {
        setData(repos);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knowledges" element={<Knowledges />} />
        <Route path="/portfolio" element={<Portfolio data={data} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
