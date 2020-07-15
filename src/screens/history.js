/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class history extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header
            placement="left"
            leftComponent={{
              text: 'History',
              style: {
                color: styles.fontColor,
                fontSize: 20,
              },
             }}
            backgroundColor="#fff"
            bottomDivider
          />

          <View style={styles.mt_10} />
          <ListItem
            key={1}
            leftIcon={
              <Icon solid name="money-bill" size={30} />
            }
            title="Top Up Pulsa"
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
  read: {
    backgroundColor: '#f7f7f7',
  },
});
