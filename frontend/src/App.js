import React from 'react';
import './App.css';
import Main from './component/Main';
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import MoviePage from './component/MoviePage';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/movie/:slug" component={MoviePage} />
      </Switch>
      </Router>

    </div>
  );
}

export default App;
