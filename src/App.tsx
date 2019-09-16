import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/about';
import Works from './components/works';
import Contact from './components/contact';
import createSagaMiddleware from '@redux-saga/core';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/root-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { rootSaga } from './store/sagas/root-saga';
import { requestImages } from './store/actions/images-actions';
import { Provider } from 'react-redux';
import ImageDetail from './components/imageDetail';
import { requestUsers } from './store/actions/user-actions';
import addImage from './components/addImage';
import { requestComments } from './store/actions/comments-actions';
import EditProfile from './components/editProfile';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)


class App extends React.Component {
  render(){

    store.dispatch(requestImages());
    store.dispatch(requestUsers());
    store.dispatch(requestComments());

    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path='/home' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/works' component={Works}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/image/:id' component={ImageDetail}/>
              <Route path='/add-image' component={addImage}/>
              <Route path='/edit-profile' component={EditProfile}/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}


export default App;
