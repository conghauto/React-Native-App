import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Message extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.message}>Hello message</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  content: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  message: {
    margin: 10,
  },
});
