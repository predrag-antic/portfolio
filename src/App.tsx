import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/about';
import Works from './components/works';
import Contact from './components/contact';

class App extends React.Component {
  render(){
  
    return (
      <div>
        <BrowserRouter>
          <NavBar></NavBar>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/works' component={Works}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
