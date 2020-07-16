/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

// Import Screens
import Home from '../screens/home';
import History from '../screens/history';
import Inbox from '../screens/inbox';
import Profile from '../screens/profile';

const BottomTab = createBottomTabNavigator();

export default class Member extends Component {
  render() {
    return (
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: '#3f3d56',
          style: styles.tabBar,
        }}
      >
        <BottomTab.Screen
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          component={Home}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'History',
            tabBarIcon: ({ color, size }) => (
              <Icon name="receipt" color={color} size={size} />
            ),
          }}
          component={History}
          name="history"
        />
        <BottomTab.Screen
          options={{
            title: 'Pay',
            tabBarIcon: ({ color, size }) => (
              <Icon name="qrcode" color={color} size={size} />
            ),
          }}
          component={Home}
          name="Bayar"
        />
        <BottomTab.Screen
          options={{
            title: 'Inbox',
            tabBarIcon: ({ color, size }) => (
              <Icon name="envelope" color={color} size={size} />
            ),
          }}
          component={Inbox}
          name="Inbox"
        />
        <BottomTab.Screen
          options={{
            title: 'Account',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
          component={Profile}
          name="profile"
        />
      </BottomTab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    height: 55,
    paddingBottom: 5,
  },
});
