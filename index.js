import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainSchedule from './TrainSchedule';
import SingleTrain from './SingleTrain';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={TrainSchedule} />
      <Route path="/train/:trainId" component={SingleTrain} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
