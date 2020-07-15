import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './App.scss';
import {Landing} from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Landing/>
          </Route>
          <Route exact path='/register'>
            <Register/>
          </Route>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
