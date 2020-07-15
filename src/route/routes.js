/* eslint-disable prettier/prettier */
import React, { Component } from 'react';

// Auth Screens
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Pin from '../screens/auth/pin';
import Forget from '../screens/auth/forget';

// Home Screens
import User from './member-routes';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default class authRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }

  render() {
    const { isLogin } = this.state;
    return (
      <Stack.Navigator>
        {/* NOT LOGIN SCREENS */}
        {!isLogin && (
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

        {/* ON LOGIN SCREENS */}
        {isLogin && (
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