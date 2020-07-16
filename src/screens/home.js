/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Avatar, Header, Text, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { GET_PROFILE } from '../redux/actions/profile.actions';
import { pin } from '../redux/actions/auth.actions';

// Imports: Component
import Loader from '../component/loader';

import avatar from '../assets/profile.png';

export class home extends Component {
  componentDidMount = () => {
    const { userId } = this.props.auth;
    this.props.GET_PROFILE({ id: userId });
  }

  render() {
    const { profile_data, profile_loading } = this.props.profile;
    return (
      <SafeAreaView>
        <Loader isLoading={profile_loading} />
        <ScrollView>
          <Header
            placement="left"
            leftComponent={
              <Avatar
                rounded
                source={avatar}
              />
            }
            centerComponent={{
              text: profile_data !== null ? profile_data.fullname : '-',
              style: { color: '#3f3d56' },
            }}
            rightComponent={
              <Icon solid name="heart" size={20} color="#f70000" />
            }
            backgroundColor="#fff"
            bottomDivider
          />
          {/* Head 1 */}
          {profile_loading === false && profile_data !== null &&  (
            <>
              <View style={styles.head1}>
                <View style={styles.childHead1}>
                  <Text h4 style={styles.fontWhite}>Rp {profile_data.amounts.toString()}</Text>
                  <Text style={styles.fontWhite}>Bonus Balance 0</Text>
                </View>
                <View style={styles.childHead2}>
                  <TouchableOpacity
                    style={styles.headIcon}
                    onPress={() => this.props.SET_PIN(true)}
                  >
                    <Icon solid name="money-check-alt" size={25} color="#fff" />
                    <Text style={styles.fontWhite}>Top Up</Text>
                  </TouchableOpacity>
                  <View style={styles.headIcon}>
                    <Icon solid name="money-bill-wave-alt" size={25} color="#fff" />
                    <Text style={styles.fontWhite}>Transfer</Text>
                  </View>
                  <View style={styles.headIcon}>
                    <Icon solid name="ticket-alt" size={25} color="#fff" />
                    <Text style={styles.fontWhite}>Ticket</Text>
                  </View>
                  <View style={styles.headIcon}>
                    <Icon solid name="wallet" size={25} color="#fff" />
                    <Text style={styles.fontWhite}>Wallet</Text>
                  </View>
                </View>
              </View>
              {/* Head 2 */}
              <View style={styles.head2}>
                <Text h4>Feature</Text>
                <View style={styles.childHead2}>
                  <View style={styles.headIcon}>
                    <Icon solid name="mobile-alt" size={25} color="#f70000" />
                    <Text style={styles.fontDark}>Pulsa/Data</Text>
                  </View>
                  <View style={styles.headIcon}>
                    <Icon solid name="bolt" size={25} color="#f70000" />
                    <Text style={styles.fontDark}>Electricity</Text>
                  </View>
                  <View style={styles.headIcon}>
                    <Icon solid name="gamepad" size={25} color="#f70000" />
                    <Text style={styles.fontDark}>Games</Text>
                  </View>
                  <View style={styles.headIcon}>
                    <Icon solid name="mobile" size={25} color="#f70000" />
                    <Text style={styles.fontDark}>Pascabayar</Text>
                  </View>
                </View>
                <View style={styles.childHead2}>
                  <View style={styles.headIcon}>
                    <Icon solid name="money-bill-alt" size={25} color="#f70000" />
                    <Text style={styles.fontDark}>E-Money</Text>
                  </View>
                  <View style={styles.headIcon}>
                    <Icon solid name="bus" size={25} color="#f70000" />
                    <Text style={styles.fontDark}>Transport</Text>
                  </View>
                  <View style={styles.headIcon}>
                    <Icon solid name="people-carry" size={25} color="#f70000" />
                    <Text style={styles.fontDark}>Berbagi</Text>
                  </View>
                  <View style={styles.headIcon}>
                    <Icon solid name="buromobelexperte" size={25} color="#f70000" />
                    <Text style={styles.fontDark}>More</Text>
                  </View>
                </View>
              </View>
              {/* Head 3 */}
              <View style={styles.head3}>
                <Text h4 style={styles.pl_20}>Promo</Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('detailPromo')}
                  >
                    <Card
                      containerStyle={styles.promo}
                      imageStyle={styles.coverPromo}
                      image={require('../assets/banner/1.jpg')}
                    />
                  </TouchableOpacity>
                  <Card
                    containerStyle={styles.promo}
                    imageStyle={styles.coverPromo}
                    image={require('../assets/banner/2.jpg')}
                  />
                  <Card
                    containerStyle={styles.promo}
                    imageStyle={styles.coverPromo}
                    image={require('../assets/banner/3.jpg')}
                  />
                  <Card
                    containerStyle={styles.promo}
                    imageStyle={styles.coverPromo}
                    image={require('../assets/banner/4.jpg')}
                  />
                </ScrollView>
              </View>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mt_10: {
    marginTop: 10,
  },
  mb_17: {
    marginBottom: 17,
  },
  pl_20: {
    paddingLeft: 20,
  },
  head1: {
    height: 150,
    backgroundColor: '#f70000',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  childHead1: {
    flex: 1,
  },
  childHead2: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  head2: {
    height: 200,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
  },
  head3: {
    height: 200,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  headIcon: {
    flex: 1,
    alignItems: 'center',
  },
  fontListWhite: {
    color: '#fff',
  },
  fontWhite: {
    color: '#fff',
    fontSize: 11,
  },
  fontDark: {
    color: '#3f3d56',
    fontSize: 11,
  },
  promo: {
    width: 250,
    height: 130,
    borderRadius: 10,
  },
  coverPromo: {
    height: 130,
    maxHeight: 130,
    minHeight: 130,
    borderRadius: 10,
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
    GET_PROFILE: (trueFalse) => dispatch(GET_PROFILE(trueFalse)),
    SET_PIN: (request) => dispatch(pin(request)),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(home);
