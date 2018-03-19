import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';

import { Provider } from 'react-redux';
import store from './store';

const auth = {
  isAuthenticated: false
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" 
          render={props => auth.isAuthenticated ? (
            <App />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
          }
        />
        <Route path="/login" component={LoginContainer} />
      </Switch>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
