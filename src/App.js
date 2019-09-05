import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Feed from './components/Feed/FeedContainer';
import Header from './components/Header/HeaderContainer';
import NotFound from './components/NotFound';
import LogIn from './components/LogIn';

const App = () => {
  return (
    <div className="App">
      <Header 
        options={[
          'funny', 'frontend', 'sports', 'memes',
          'gaming', 'movies', 'politics', 'lifehacks', 
          'android', 'pics', 'technology', 'xboxone'
        ]}/>
      <Switch>
        <Route path='/hot' exact component={Feed}/>
        <Route path='/top' exact component={Feed}/>
        <Route path='/new' exact component={Feed}/>
        <Route path='/controversial' exact component={Feed}/>
        <Route path='/rising' exact component={Feed}/>
        <Route path='/Login' exact component={LogIn}/>
          <Redirect exact from='/' to='hot'/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
