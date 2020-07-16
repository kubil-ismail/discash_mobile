/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Header, Card, Text, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import QRCode from 'react-native-qrcode-svg';
import logo from '../assets/discash.png';

export default class payment extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header
            centerComponent={{
              text: 'Pay Code',
              style: {
                color: '#3f3d56',
                fontSize: 20,
              },
            }}
            backgroundColor="#fff"
            bottomDivider
          />

          <View style={styles.mt_10} />
          <Card>
            <Text style={styles.textCenter}>
              Show the pay code to the merchant to proceed with the payment
            </Text>
            <View style={styles.qr}>
              <QRCode
                value="http://awesome.link.qr"
                size={150}
              />
            </View>
            <Text style={styles.textCenter}>
              Valid Until
            </Text>
            <Text style={styles.timer}>
              03:30
            </Text>
          </Card>
          <View style={styles.paymentBar}>
            <ListItem
              key={1}
              leftAvatar={{ source: logo }}
              title="Payment method"
              subtitle="Discash"
              bottomDivider
              chevron
            />
          </View>
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
  qr: {
    flex: 1,
    alignItems: 'center',
    marginVertical:15,
  },
  textCenter: {
    textAlign: 'center',
  },
  timer: {
    textAlign: 'center',
    color: '#f70000'
  },
  paymentBar: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 20,
  },
});
