import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Feed from './components/Feed/FeedContainer';
import Header from './components/Header/HeaderContainer';
import NotFound from './components/NotFound';

const App = () => {
  return (
    // list:

    //arrows around score
    //404 style
    //score helper
    //post page to func
    //propTypes

    //ReadMe refactoring
    //tests
    <div className="app">
      <Header 
        options={[
          'Funny', 'Frontend', 'Sports', 'Memes',
          'Gaming', 'Movies', 'Politics', 'Lifehacks', 
          'Android', 'Pics', 'Technology', 'Xboxone'
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
