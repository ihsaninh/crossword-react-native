import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import AppContainer from './src/screens/Route'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}