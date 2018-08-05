import React, { Component } from 'react';
import Calendar from './components/Calendar';
import SpecifiedDay from './components/SpecifiedDay';
import {BrowserRouter,Route} from 'react-router-dom';
import { connect } from 'react-redux';
//import * as actions from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
              <Route exact path='/' component={Calendar} />
              <Route exact path="/:month/:day/:year" component={SpecifiedDay} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
