import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import JobList from './job/job-list';
import JobAdd from './job/job-add';
import JobDetails from './job/job-details'



class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui inverted black top menu">
          <div className="item">
            <h2 className="ui red header">Job Portal</h2>
          </div>
          <Link className="item" to="/">Jobs</Link>
          <Link className="item" to="/job/new">Add Job</Link>

        </div>

        <Switch>
          <Route exact path="/" component={ JobList } />
          <Route exact path="/job/new" component={ JobAdd } />
          <Route exact path="/job/:id" component={ JobDetails } />
        </Switch>

      </div>
    );
  }
}

export default App;
