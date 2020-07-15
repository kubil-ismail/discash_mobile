/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import Home from '../screens/home';
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
            title: 'Beranda',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
          component={Home}
          name="home"
        />
        <BottomTab.Screen
          options={{
            title: 'Riwayat',
            tabBarIcon: ({ color, size }) => (
              <Icon name="history" color={color} size={size} />
            ),
          }}
          component={Home}
          name="home2"
        />
        <BottomTab.Screen
          options={{
            title: 'Bayar',
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
          component={Home}
          name="Inbox"
        />
        <BottomTab.Screen
          options={{
            title: 'Akun',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
          component={Home}
          name="home5"
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
