/* eslint-disable prettier/prettier */
import React from 'react';

// Screens
import Login from '../screens/auth/login';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function authRoutes() {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false }}
        component={Login}
        name={'login'}
      />
    </>
  );
}
