import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router';

import CardView from './containers/cardview';
import store, { history } from './store';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path='/' component={CardView} />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
