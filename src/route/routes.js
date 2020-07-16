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
import Avatar from '../screens/profile/avatar.profile';
import EditProfile from '../screens/profile/edit.profile';
import DetailInbox from '../screens/detail/inbox.detail';
import DetailHistory from '../screens/detail/history.detail';
import DetailPromo from '../screens/detail/promo.detail';

// Payment
import TopUp from '../screens/payment/topup';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export class Routes extends Component {
  render() {
    const {
      loggedIn,
      apikey,
      pinRequired,
      pinStatus,
      payRequired,
      payStatus,
    } = this.props.auth;
    return (
      <Stack.Navigator>
        {/* SHOW PIN SCREENS */}
        {pinRequired && pinStatus === false && (
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
        {loggedIn === false && apikey === null && (
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

        {/* Payments */}
        {payRequired && payStatus === false && pinRequired === false &&  (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              component={TopUp}
              name={'topUp'}
            />
          </>
        )}

        {/* ON LOGIN SCREENS */}
        {loggedIn && apikey && pinRequired === false && (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              component={User}
              name={'home'}
            />
            {/* Edit page */}
            <Stack.Screen
              options={{ title: 'Edit Picture' }}
              component={Avatar}
              name={'avatar'}
            />
            <Stack.Screen
              options={{ title: 'Edit Profile' }}
              component={EditProfile}
              name={'editProfile'}
            />
            {/* Detail page */}
            <Stack.Screen
              options={{ title: 'Detail Inbox' }}
              component={DetailInbox}
              name={'detailInbox'}
            />
            <Stack.Screen
              options={{ title: 'Detail History' }}
              component={DetailHistory}
              name={'detailHistory'}
            />
            <Stack.Screen
              options={{ title: 'Detail Promo' }}
              component={DetailPromo}
              name={'detailPromo'}
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
