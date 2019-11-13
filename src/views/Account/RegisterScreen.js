import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <TextInput style={styles.inputStyle} placeholder="Enter your email" />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your password"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Re-enter your password"
          />
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.textRegister}>ĐĂNG KÝ</Text>
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
    marginTop: 40,
  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 20,
    paddingLeft: 25,
  },
  btnRegister: {
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRegister: {
    fontFamily: 'Avenir',
    color: '#000',
    fontWeight: 'bold',
  },
});
