/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Header, Image } from 'react-native-elements';
import svg from '../assets/vector/shop.png';

export default class comingSoon extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header
            placement="left"
            leftComponent={{
              text: 'Coming Soon',
              style: {
                color: '#3f3d56',
                fontSize: 20,
              },
            }}
            backgroundColor="#fff"
            bottomDivider
          />
          <Image source={svg} style={styles.styles} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  svg: {
    width: 250,
    height: 180,
    marginVertical: 30,
  },
});
