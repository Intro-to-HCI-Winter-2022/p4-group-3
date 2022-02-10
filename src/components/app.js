import '../style.scss';
import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from '../pages/home';

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
