/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import avatar from '../assets/profile.png';

export default class profile extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <ListItem
            key={1}
            leftAvatar={{ source: avatar }}
            title="Araki Sensei"
            subtitle="089630080545"
            bottomDivider
            chevron
          />

          <View style={styles.mt_10} />
          <ListItem
            key={2}
            title="Language"
            subtitle="English"
            bottomDivider
            chevron
          />
          <ListItem
            key={3}
            title="Security Question"
            subtitle="Not Set"
            bottomDivider
            chevron
          />
          <ListItem
            key={4}
            title="Email"
            subtitle="***ki@gmail.com"
            bottomDivider
            chevron
          />
          <ListItem
            key={5}
            title="Change Pin"
            subtitle="***7"
            bottomDivider
            chevron
          />

          <View style={styles.mt_10} />
          <ListItem
            key={6}
            title="Term of Service"
            bottomDivider
            chevron
          />
          <ListItem
            key={7}
            title="Privacy Policy"
            bottomDivider
            chevron
          />
          <ListItem
            key={8}
            title="Help Center"
            bottomDivider
            chevron
          />
          <ListItem
            key={9}
            title="Review"
            bottomDivider
            chevron
          />

          <View style={styles.mt_10} />
          <ListItem
            key={10}
            title="Logout"
            bottomDivider
            chevron
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mt_10: {
    marginTop: 10,
  },
});
