import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class PageContact extends Component {
  render() {
    return <View style={styles.viewContact} />;
  }
}

const styles = StyleSheet.create({
  viewContact: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
