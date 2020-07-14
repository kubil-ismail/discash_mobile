/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { PersistGate } from 'redux-persist/integration/react'; // Imports: Redux Persist Persister
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store'; // React Native: App

import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen'; // Imports: Splash Screen

// Navigator
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// import Test from './route/member-routes';

// Auth
import Login from './screens/auth/login';

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
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{ headerShown: false }}
                component={Login}
                name={'login'}
              />
              {/* <Stack.Screen
                options={{ headerShown: false }}
                component={Test}
                name={'welcome'}
              /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
