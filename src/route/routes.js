/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { logout } from '../redux/actions/auth.actions';

// Auth Screens
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Pin from '../screens/auth/pin';
import Forget from '../screens/auth/forget';

// Home Screens
import User from './member-routes';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export class Routes extends Component {
  render() {
    const { loggedIn, apikey, pinRequired } = this.props.auth;
    return (
      <Stack.Navigator>
        {/* SHOW PIN SCREENS */}
        {pinRequired && (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              component={Pin}
              name={'pin'}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              component={Forget}
              name={'forget'}
            />
          </>
        )}

        {/* NOT LOGIN SCREENS */}
        {!loggedIn && !apikey && (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              component={Login}
              name={'login'}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              component={Register}
              name={'register'}
            />
          </>
        )}

        {/* ON LOGIN SCREENS */}
        {loggedIn && apikey && (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              component={User}
              name={'home'}
            />
          </>
        )}
      </Stack.Navigator>
    );
  }
}

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    auth: state.authReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // logout
    reduxLogout: (trueFalse) => dispatch(logout(trueFalse)),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
