import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// import CustomHeader from '../../../components/CustomHeader';

import SearchScreen from './SearchScreen';
import DetailProduct from '../../Detail/DetailProduct';
import CartScreen from '../../Cart/CartScreen';

const MainNavigator = createStackNavigator({
  Search: {
    screen: SearchScreen,
  },
  Detail: {
    navigationOptions: {
      header: null,
    },
    screen: DetailProduct,
  },
  Cart: {
    screen: CartScreen,
  }
});

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
