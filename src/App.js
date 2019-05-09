import React from 'react';
import './App.css';
import MainScreen from './Components/MainScreen.js'
import { Provider } from 'react-redux';
import combineReducers from './Reducers/reducers.js'
import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';

const middleware = [thunk];

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);

const initialState = {}

const store = createStore(combineReducers, initialState, enhancer);

function App() {
  return (
    <Provider store={store}>
        <MainScreen />
    </Provider>
  );
}

export default App;
