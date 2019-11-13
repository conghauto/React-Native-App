import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import CustomHeader from '../../../components/CustomHeader';

import AccountScreen from './AccountScreen';
import LoginScreen from '../../Account/LoginScreen';
import UserInfoScreen from '../../Account/UserInfoScreen';
import RegisterScreen from '../../Account/RegisterScreen';
import MessageScreen from '../../Message/MessageScreen';
import CartScreen from '../../Cart/CartScreen';
import OrderHistoryScreen from '../../Order/OrderHistoryScreen';

const MainNavigator = createStackNavigator(
  {
    Account: {
      navigationOptions: {
        header: null,
      },
      screen: AccountScreen,
    },
    Login: {
      navigationOptions: {
        title: 'Đăng nhập',
      },
      screen: LoginScreen,
    },
    Register: {
      navigationOptions: {
        title: 'Tạo tài khoản',
      },
      screen: RegisterScreen,
    },
    Message: {
      navigationOptions: {
        title: 'Chat',
      },
      screen: MessageScreen,
    },
    Cart: {
      screen: CartScreen,
    },
    UserInfo: {
      navigationOptions: {
        title: 'Thông tin tài khoản',
      },
      screen: UserInfoScreen,
    },
    OrderHistory: {
      navigationOptions: {
        title: 'Đơn đã mua',
      },
      screen: OrderHistoryScreen,
    },
  },
  {
    initialRouteName: 'Account',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(MainNavigator);

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5b7cc',
  },
});
