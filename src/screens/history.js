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
import { GET_HISTORY } from '../redux/actions/transaction.actions';

export class history extends Component {
  componentDidMount = () => {
    const { userId } = this.props.auth;
    this.props.GET_HISTORY({ id: userId });
  }

  render() {
    const { transaction_data, transaction_loading } = this.props.history;
    return (
      <SafeAreaView>
        <Loader isLoading={transaction_loading} />
        <ScrollView>
          <Header
            placement="left"
            leftComponent={{
              text: 'Transactions',
              style: {
                color: '#3f3d56',
                fontSize: 20,
              },
             }}
            backgroundColor="#fff"
            bottomDivider
          />

          <View style={styles.mt_10} />
          {!transaction_loading && transaction_data.map((val, key) => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('detailHistory',{
                transaction_date: val.date.slice(0, 10),
                transaction_amount: val.price,
                transaction_type: val.type,
              })}
            >
              <ListItem
                key={1}
                leftIcon={
                  <Icon solid name="money-bill" size={30} />
                }
                title={val.type}
                subtitle={val.date.slice(0,10)}
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
    history: state.transactionReducer,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // GET_HISTORY
    GET_HISTORY: (trueFalse) => dispatch(GET_HISTORY(trueFalse)),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(history);
