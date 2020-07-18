/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';

// Imports: Redux Actions
import { connect } from 'react-redux';
import { GET_PROFILE, EDIT_AVATAR } from '../../redux/actions/profile.actions';
import { logout } from '../../redux/actions/auth.actions';

// Imports: Component
import Loader from '../../component/loader';

import avatar from '../../assets/profile.png';

export class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
    };
  }

  componentDidMount = () => {
    const { userId } = this.props.auth;
    this.props.GET_PROFILE({ id: userId });
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        ToastAndroid.show('Image must filled', ToastAndroid.SHORT);
      } else if (response.error) {
        ToastAndroid.show('Something wrong, try again', ToastAndroid.SHORT);
      } else if (response.customButton) {
        ToastAndroid.show('Something wrong, try again', ToastAndroid.SHORT);
      } else if (response.fileSize >= 2077116) {
        ToastAndroid.show('Max Size 2 Mb', ToastAndroid.SHORT);
      } else {
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  }

  renderFileUri = () => {
    if (this.state.fileUri) {
      return <Avatar
        rounded
        size={200}
        containerStyle={styles.mb_10}
        source={{ uri: this.state.fileUri }}
      />;
    } else {
      return <Avatar
        rounded
        size={200}
        containerStyle={styles.mb_10}
        source={avatar}
      />;
    }
  }

  render() {
    const { profile_loading } = this.props.profile;
    return (
      <SafeAreaView>
        <Loader isLoading={profile_loading} />
        <ScrollView>
          <View style={styles.center}>
            {this.renderFileUri()}
            <Button
              title="Select profile image"
              onPress={() => this.chooseImage()}
              buttonStyle={styles.bgRed}
            />
            <Button
              title="Update profile"
              type="clear"
              titleStyle={styles.outlineBtn}
              onPress={() => this.props.navigation.navigate('editProfile')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mb_10: {
    marginBottom: 20,
  },
  center: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
  bgRed: {
    backgroundColor: '#f70000',
    marginBottom: 10,
  },
  outlineBtn: {
    color: '#3f3d56',
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
