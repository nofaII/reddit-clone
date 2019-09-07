import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Feed from './components/Feed/FeedContainer';
import Header from './components/Header/HeaderContainer';
import NotFound from './components/NotFound';

const App = () => {
  return (
    // list:

    //arrows around score
    //options style
    //404 style
    //score helper
    //post page to func
    //propTypes
    //currect comment link

    //ReadMe refactoring
    //tests
    <div className="app">
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
          <Redirect exact from='/' to='hot'/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
