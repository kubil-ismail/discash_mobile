/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ToastAndroid,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { pay } from '../../redux/actions/auth.actions';
import axios from 'axios';
const url = 'https://api-discash.alipal.pw/';

export class Topup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null,
      nominal: null,
      title: null,
    };
  }
  transfer = () => {
    const { number, nominal, title } = this.state;
    if (number && nominal && title ) {
      const { userId } = this.props.auth;
      const request = `${url}transfer/money?payment=1&userid=${userId}&price=${nominal}&account_number=${number}&name=${title}`;
      axios.get(request)
      .then(() => ToastAndroid.show('Transfer success', ToastAndroid.SHORT))
      .catch(() => ToastAndroid.show('Transfer failed', ToastAndroid.SHORT));
    } else {
      ToastAndroid.show('All form must filled', ToastAndroid.SHORT);
    }
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mt_10} />
          <View style={styles.paymentBar}>
            <Input
              placeholder="User Number Account"
              keyboardType="numeric"
              onChangeText={(e) => this.setState({ number: e })}
            />
            <Input
              placeholder="Nominal"
              keyboardType="numeric"
              onChangeText={(e) => this.setState({ nominal: e })}
            />
            <Input
              placeholder="Transfer Name"
              onChangeText={(e) => this.setState({ title: e })}
            />
            <Button
              title="Transfer"
              containerStyle={styles.mt_10}
              onPress={() => this.transfer()}
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
