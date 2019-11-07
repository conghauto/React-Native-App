import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import CustomTabNavigator from '../components/CustomTabNavigator';
import CustomHeader from '../components/CustomHeader';

export default class Home extends Component {
  static router = CustomTabNavigator.router;

  render() {
    return (
      <View style={styles.container}>
        <CustomHeader navigation={this.props.navigation} />
        <CustomTabNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
