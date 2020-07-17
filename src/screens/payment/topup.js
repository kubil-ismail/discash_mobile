/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Header, Card, Text, ListItem, Button } from 'react-native-elements';
import QRCode from 'react-native-qrcode-svg';
import logo from '../../assets/discash.png';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { pay } from '../../redux/actions/auth.actions';

export class Topup extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Header
            centerComponent={{
              text: 'Top Up',
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
                value="http://192.168.1.4:8000/topup"
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
          <Button
            title="Back"
            containerStyle={styles.mt_10}
            onPress={() => this.props.SET_PAY(false)}
            buttonStyle={styles.bgRed}
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
    marginVertical: 15,
  },
  textCenter: {
    textAlign: 'center',
  },
  timer: {
    textAlign: 'center',
    color: '#f70000',
  },
  bgRed: {
    backgroundColor: '#f70000',
  },
  paymentBar: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 20,
  },
});


// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    auth: state.authReducer,
    profile: state.profileReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // GET_PROFILE
    SET_PAY: (request) => dispatch(pay(request)),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Topup);
