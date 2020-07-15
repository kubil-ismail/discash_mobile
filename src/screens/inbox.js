/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import avatar from '../assets/profile.png';

export default class inbox extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header
            placement="left"
            leftComponent={{ text: 'Inbox', style: { color: styles.fontColor, fontSize: 20 } }}
            backgroundColor="#fff"
            bottomDivider
          />

          <View style={styles.mt_10} />
          <ListItem
            key={1}
            leftIcon={
              <Icon solid name="envelope" size={30} color="#6d6d6d" />
            }
            title="Info Login"
            subtitle="Today, 13.43 PM"
            bottomDivider
            chevron
          />
          <ListItem
            key={2}
            leftIcon={
              <Icon solid name="envelope-open" size={30} color="#6d6d6d" />
            }
            title="Info Login"
            subtitle="Today, 13.43 PM"
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
  fontColor: {
    color: '#3f3d56',
  },
});
