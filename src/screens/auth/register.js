/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { Button, Image, Input, Text } from 'react-native-elements';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { register } from '../../redux/actions/auth.action';

import svg from '../../assets/vector/access_account.png';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      phone: null,
      password: null,
      password2: null,
      isLoading: false,
      pin: 1234
    };
  }
  onRegis = () => {
    const { email, password, pin } = this.state
    const body = { email, password, pin }
    this.props.register(data)
  }
  render() {
    const { isLoading } = this.props.auth;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            source={svg}
            style={styles.svg}
            resizeMode="contain"
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text h3 style={styles.title}>Register</Text>
          <Input
            placeholder="Email address"
            keyboardType="email-address"
            onChangeText={(e) => this.setState({ email: e })}
            leftIcon={
              <Icon
                name="envelope"
                size={17}
                color="#3f3d56"
              />
            }
          />
          <Input
            placeholder="Phone Number"
            keyboardType="phone-pad"
            onChangeText={(e) => this.setState({ phone: e })}
            leftIcon={
              <Icon
                name="phone-square"
                size={18}
                color="#3f3d56"
              />
            }
          />
          <Input
            placeholder="Password"
            onChangeText={(e) => this.setState({ password: e })}
            secureTextEntry
            leftIcon={
              <Icon
                name="lock"
                size={24}
                color="#3f3d56"
              />
            }
          />
          <Input
            placeholder="Password confirmation"
            onChangeText={(e) => this.setState({ password2: e })}
            secureTextEntry
            leftIcon={
              <Icon
                name="lock"
                size={24}
                color="#3f3d56"
              />
            }
          />
          <Button
            title="Register"
            loading={isLoading}
            buttonStyle={styles.bgRed}
            onPress={() => this.onRegis()}
          />
          {/* eslint-disable-next-line react-native/no-inline-styles */}
          <View style={{ marginTop: 20 }} />
          <Button
            title="Already have account"
            type="clear"
            titleStyle={styles.outlineBtn}
            onPress={() => this.props.navigation.navigate('login')}
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
    height: 200,
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
});

const mapStateToProps = state => ({
    auth: state.authReducer,
})
const mapDispatchToProps = { register }

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Register);