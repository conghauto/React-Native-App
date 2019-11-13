import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TextInput style={styles.inputStyle} placeholder="Enter your email" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your password"
          />
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37a060',
  },
  content: {
    marginTop: 50,
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 20,
    paddingLeft: 25,
  },
  btnLogin: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {
    fontFamily: 'Avenir',
    color: '#000',
    fontWeight: 'bold',
  },
});
