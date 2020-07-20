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

// Imports: Component
import Loader from '../component/loader';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { GET_INBOX } from '../redux/actions/profile.actions';

class inbox extends Component {
  componentDidMount = () => {
    const { userId } = this.props.auth;
    this.props.GET_INBOX({ id: userId });
  }

  render() {
    const { profile_inbox_data, profile_loading } = this.props.profile
    return (
      <SafeAreaView>
        {console.log('oke',profile_inbox_data)}
        <Loader isLoading={profile_loading} />
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
          {profile_inbox_data !== null && profile_inbox_data.map((val, key) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('detailInbox',{
                inboxTitle: val.title,
                inboxDesc: val.description
              })}
            >
              <ListItem
                key={key}
                leftIcon={
                  <Icon solid name="envelope" size={30} />
                }
                title={val.title}
                subtitle={val.description}
                bottomDivider
                chevron
              />
            </TouchableOpacity>
          ))}
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