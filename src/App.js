import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Feed from './components/Feed';
import Header from './components/Header/Header';
import NotFound from './components/NotFound';
import LogIn from './components/LogIn';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/hot' exact render={() => 
          <Feed props={'for hot'}/>}/>
        <Route path='/top' exact render={() => 
          <Feed props={'for top'}/>}/>
        <Route path='/new' exact render={() => 
          <Feed props={'for new'}/>}/>
        <Route path='/controversial' exact render={() => 
          <Feed props={'for new'}/>}/>
        <Route path='/rising' exact render={() => 
          <Feed props={'for new'}/>}/>
        <Route path='/Login' exact component={LogIn}/>
        <Redirect exact from='/' to='/feed' />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
