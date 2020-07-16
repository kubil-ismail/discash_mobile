/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { GET_PROFILE } from '../redux/actions/profile.actions';
import { LOGOUT } from '../redux/actions/auth.actions';

import avatar from '../assets/profile.png';

export class profile extends Component {
  componentDidMount = () => {
    const { userId } = this.props.auth;
    this.props.GET_PROFILE({ id: userId });
  }

  render() {
    const { profile_data } = this.props.profile;
    return (
      <SafeAreaView>
        <ScrollView>
          <ListItem
            key={1}
            leftAvatar={{ source: avatar }}
            title={profile_data.fullname}
            subtitle={profile_data.phone}
            bottomDivider
            chevron
          />
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
            subtitle={profile.email}
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
          <ListItem
            key={10}
            title="Logout"
            bottomDivider
            chevron
          />
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
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(profile);
