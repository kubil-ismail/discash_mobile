/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Header, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { GET_INBOX } from '../redux/actions/profile.actions';

class inbox extends Component {
  componentDidMount = () => {
    const { userId } = this.props.auth;
    this.props.GET_INBOX({ id: userId });
  }

  render() {
    const { profile_inbox_data } = this.props.profile
    return (
      <SafeAreaView>
        <ScrollView>
          <Header
            placement="left"
            leftComponent={{
              text: 'Inbox',
              style: {
                color: '#3f3d56',
                fontSize: 20,
              },
             }}
            backgroundColor="#fff"
            bottomDivider
          />

          <View style={styles.mt_10} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('detailInbox')}
          >
            <ListItem
              key={1}
              leftIcon={
                <Icon solid name="envelope" size={30} />
              }
              title="Info Login"
              subtitle="Today, 13.43 PM"
              bottomDivider
              chevron
            />
          </TouchableOpacity>
          <ListItem
            key={2}
            leftIcon={
              <Icon solid name="envelope-open" size={30} />
            }
            containerStyle={styles.read}
            title="Info Login"
            subtitle="Today, 13.43 PM"
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
  fontColor: {
    color: '#3f3d56',
  },
  read: {
    backgroundColor: '#f7f7f7',
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
    // GET_INBOX
    GET_INBOX: (trueFalse) => dispatch(GET_INBOX(trueFalse)),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(inbox);