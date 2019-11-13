import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Main from './PageAccount/Main';

export default class PageAccount extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
