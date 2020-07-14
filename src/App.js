import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.scss';
import {Landing} from "./pages/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
