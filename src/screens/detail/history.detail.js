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

import svg from '../../assets/vector/shop.png';

export default class inbox extends Component {
  render() {
    const { transaction_date, transaction_amount, transaction_type } = this.props.route.params;
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
            <Text h2 style={styles.txtCenter}>Transactions</Text>
            <Text style={styles.txtCenter}>
              Hai discasher, kamu melakukan {transaction_type} pada {transaction_date} sebesar Rp {transaction_amount}
            </Text>
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
