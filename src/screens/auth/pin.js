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

import svg from '../../assets/vector/pin.png';

export default class pin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'test@gmail.com',
      code: null,
      isLoading: false,
    };
  }

  onCheck = () => {
    const { code, email } = this.state;
    if (code) {
      if (code.length === 4) {
        if (email) {
          this.setState({ isLoading: true });
          ToastAndroid.show('Allowed', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('Something wrong, Try again', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show('Pin must be greater than 4 characters', ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Pin must filled', ToastAndroid.SHORT);
    }
  }
  render() {
    const { code, isLoading } = this.state;
    return (
      <SafeAreaView style={styles.container}>
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
            onPress={() => this.onCheck()}
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
