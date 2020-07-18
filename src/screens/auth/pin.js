/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ToastAndroid,
} from 'react-native';
import { Button, Image, Text } from 'react-native-elements';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

// Imports: Component
import Loader from '../../component/loader';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { pin, pay } from '../../redux/actions/auth.actions';
import axios from 'axios';
const url = 'http://192.168.1.4:8000/';

import svg from '../../assets/vector/pin.png';

export class Pins extends Component {
  constructor(props) {
    super(props);
    const { profile_data } = this.props.profile;
    this.state = {
      code: null,
      userId: profile_data.user_id,
      isLoading: false,
    };
  }

  onCheck = () => {
    const { code, userId } = this.state;
    this.setState({ isLoading: true });

    if (code) {
      if (code.length === 4) {
        if (userId) {
          const body = { pin: code, userId };
          axios.post(`${url}auth/pin`, body)
            .then(() => {
              this.props.SET_PIN(false);
              this.props.SET_PAY(true);
            })
            .catch((err) => ToastAndroid.show(err.response.data.message, ToastAndroid.SHORT));
        } else {
          ToastAndroid.show('Something wrong, Try again', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show('Pin must be greater than 4 characters', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Pin must filled', ToastAndroid.SHORT);
    }
    this.setState({ isLoading: false });
  }
  render() {
    const { code, isLoading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Loader isLoading={isLoading} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={svg}
            style={styles.svg}
            resizeMode="contain"
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text h3 style={styles.title}>Pin App</Text>
          <View style={styles.center}>
            <SmoothPinCodeInput
              password
              mask="*"
              codeLength={4}
              value={code ? code : ''}
              onTextChange={(_code) => this.setState({ code: _code })}
            />
          </View>
          <Button
            title="Check"
            loading={isLoading}
            buttonStyle={styles.bgRed}
            onPress={() => {
              this.onCheck();
            }}
          />
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <View style={{ marginTop: 20 }} />
          <Button
            title="Forgot your pin"
            type="clear"
            titleStyle={styles.outlineBtn}
            onPress={() => this.props.navigation.navigate('forget')}
          />
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <View style={{ marginTop: 20 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  svg: {
    width: 250,
    height: 180,
    marginVertical: 30,
  },
  bgRed: {
    backgroundColor: '#f70000',
  },
  outlineBtn: {
    color: '#3f3d56',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#3f3d56',
  },
  center: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 50,
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
    SET_PIN: (request) => dispatch(pin(request)),
    SET_PAY: (request) => dispatch(pay(request)),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Pins);
