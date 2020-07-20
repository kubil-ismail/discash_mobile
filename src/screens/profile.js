/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { ListItem } from 'react-native-elements';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { GET_PROFILE } from '../redux/actions/profile.actions';
import { logout } from '../redux/actions/auth.actions';

// Imports: Component
import Loader from '../component/loader';

import avatar from '../assets/profile.png';

export class profile extends Component {
  componentDidMount = () => {
    const { userId } = this.props.auth;
    this.props.GET_PROFILE({ id: userId });
  }

  onLogout = () => {
    this.props.LOGOUT();
  }

  editAvatar = () => {
    this.props.navigation.navigate('avatar');
  }

  render() {
    const { profile_data, profile_loading, profile_photo } = this.props.profile;
    return (
      <SafeAreaView>
        <Loader isLoading={profile_loading} />

        <ScrollView>
          <View style={styles.mt_10} />

          <TouchableOpacity onPress={() => this.editAvatar()}>
            {profile_photo ? (
              <ListItem
                key={1}
                leftAvatar={{ url: profile_photo }}
                title={profile_loading === false ? profile_data.fullname : '-'}
                subtitle="Member"
                bottomDivider
                chevron
              />
            ) : (
              <ListItem
                key={1}
                leftAvatar={{ source: avatar }}
                title={profile_loading === false ? profile_data.fullname : '-' }
                subtitle="Member"
                bottomDivider
                chevron
              />
            )}
          </TouchableOpacity>
          {profile_loading === false &&  (
            <>
              <View style={styles.mt_10} />
              <ListItem
                key={2}
                title="Language"
                subtitle="English"
                bottomDivider
                chevron
              />
              <ListItem
                key={3}
                title="Security Question"
                subtitle="Not Set"
                bottomDivider
                chevron
              />
              <ListItem
                key={4}
                title="Email"
                subtitle={profile_data.email}
                bottomDivider
                chevron
              />
              <ListItem
                key={11}
                title="Phone"
                subtitle={profile_data.phone}
                bottomDivider
                chevron
              />
              <ListItem
                key={5}
                title="Change Pin"
                subtitle="****"
                bottomDivider
                chevron
              />

              <View style={styles.mt_10} />
              <ListItem
                key={6}
                title="Term of Service"
                bottomDivider
                chevron
              />
              <ListItem
                key={7}
                title="Privacy Policy"
                bottomDivider
                chevron
              />
              <ListItem
                key={8}
                title="Help Center"
                bottomDivider
                chevron
              />
              <ListItem
                key={9}
                title="Review"
                bottomDivider
                chevron
              />

              <View style={styles.mt_10} />
              <TouchableOpacity onPress={() => this.onLogout()}>
                <ListItem
                  key={10}
                  title="Logout"
                  bottomDivider
                  chevron
                />
              </TouchableOpacity>
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
    LOGOUT: () => dispatch(logout()),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(profile);
