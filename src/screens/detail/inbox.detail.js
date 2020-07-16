/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Text, Image } from 'react-native-elements';

import svg from '../../assets/vector/chat.png';

export default class inbox extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.center}>
            <Image
              source={svg}
              style={styles.svg}
              resizeMode="contain"
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text h2 style={styles.txtCenter}>Info Login</Text>
            <Text style={styles.txtCenter}>Hai discasher, kamu telah login pada tanggal Today, 13.43 PM</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  txtCenter: {
    textAlign: 'center',
  },
  center: {
    alignItems: 'center',
    padding: 20,
  },
  svg: {
    width: 250,
    height: 200,
    marginVertical: 30,
  },
});
