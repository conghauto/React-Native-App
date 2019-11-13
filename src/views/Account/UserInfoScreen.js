import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import icBack from '../../assets/imgs/back_right.png';

export default class UserInfoScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: 'Nguyen Van A',
      txtAddress: '69/12T Đường 120',
      txtPhone: '0921949646',
    };
  }

  render() {
    const {name, address, phone} = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            autoCapitalize="none"
            value={name}
            onChangeText={txtName => this.setState({...this.state, txtName})}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your address"
            autoCapitalize="none"
            value={address}
            onChangeText={txtAddress =>
              this.setState({...this.state, txtAddress})
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your phone number"
            autoCapitalize="none"
            value={phone}
            onChangeText={txtPhone => this.setState({...this.state, txtPhone})}
          />
          <TouchableOpacity style={styles.signInContainer}>
            <Text style={styles.signInTextStyle}>CHANGE YOUR INFOMATION</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#fff'},
  body: {flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center'},
  textInput: {
    height: 45,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Avenir',
    paddingLeft: 20,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: '#2ABB9C',
    borderWidth: 1,
  },
  signInTextStyle: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontWeight: '600',
    paddingHorizontal: 20,
  },
  signInContainer: {
    marginHorizontal: 20,
    backgroundColor: '#2ABB9C',
    borderRadius: 20,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  signInStyle: {
    flex: 3,
    marginTop: 50,
  },
});
