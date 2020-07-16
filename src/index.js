import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, useHistory} from 'react-router-dom'
import {SecureRoute, Security, LoginCallback} from '@okta/okta-react';

import * as serviceWorker from './serviceWorker';
import './index.scss';
import App from "./pages/App";
import {Landing} from "./pages/public/Landing";
import Register from "./pages/public/Register";
import Login from "./pages/public/Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Security
        issuer={`${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`}
        clientId={process.env.REACT_APP_OKTA_CLIENT_ID}
        redirectUri={window.location.origin + '/implicit/callback'}
        onAuthRequired={(authService) => {
          const redirectUri = authService.getFromUri();
          const redirectUriEncoded = encodeURI(redirectUri)
          const history = useHistory();
          history.push(`/login?redirect=${redirectUriEncoded}`);
        }}
      >
        <Route exact path='/' component={Landing}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/implicit/callback' component={LoginCallback}/>
        <SecureRoute path='/app' component={App}/>
      </Security>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
