/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'; // Imports: Redux Persist Persister
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'; // React Native: App
import SplashScreen from 'react-native-splash-screen'; // Imports: Splash Screen

export default class App extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Text>Hello</Text>
        </PersistGate>
      </Provider>
    );
  }
}
