import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import CustomHeader from '../../../components/CustomHeader';

import Introduction from '../Introduction';
import DetailProduct from '../../Detail/DetailProduct';
import ListCategory from '../../Category/ListCategory';
import MessageScreen from '../../Message/MessageScreen';
import CartScreen from '../../Cart/CartScreen';

const MainNavigator = createStackNavigator(
  {
    IntroScreen: {
      navigationOptions: {
        header: null,
      },
      screen: Introduction,
    },
    Detail: {
      navigationOptions: {
        header: null,
      },
      screen: DetailProduct,
    },
    ListCategory: {
      navigationOptions: {
        header: null,
      },
      screen: ListCategory,
    },
    Cart: {
      screen: CartScreen,
    },
    Message: {
      navigationOptions: {
        title: 'Chat',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
      screen: MessageScreen,
    },
  },
  {
    initialRouteName: 'IntroScreen',
  },
);

const AppContainer = createAppContainer(MainNavigator);

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <CustomHeader navigation={this.props.navigation} /> */}
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
