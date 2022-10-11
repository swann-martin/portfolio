import React, { useEffect, useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/knowledges" component={Knowledges} />
          <Route exact path="/portfolio">
            <Portfolio data={data} />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route path="" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
