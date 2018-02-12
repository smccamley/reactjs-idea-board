import React, { Component } from 'react';
import './App.css';
import IdeaBoard from './components/IdeaBoard'

import store from "./store/store"
import {Provider} from 'react-redux'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <IdeaBoard></IdeaBoard>
      </Provider>
    );
  }
}

export default App;
