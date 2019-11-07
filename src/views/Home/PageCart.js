import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class PageCart extends Component {
  render() {
    return <View style={styles.viewCart} />;
  }
}

const styles = StyleSheet.create({
  viewCart: {
    flex: 1,
    backgroundColor: 'red',
  },
});
