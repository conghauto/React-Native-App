import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import Icon from 'react-native-ionicons';
import icMessage from '../../../assets/imgs/mess3.png';
import icUser from '../../../assets/imgs/user.png';
import icBill from '../../../assets/imgs/bill.png';
import icInfoUser from '../../../assets/imgs/info-user.png';

const {height} = Dimensions.get('window');

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {isLogedIn: false};
  }
  render() {
    const login = (
      <View style={styles.infoAccount}>
        <Image style={styles.icUser} source={icUser} />
        <View style={styles.containerLogin}>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.textLogin}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.textRegister}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
    const logout = (
      <View style={styles.infoUser}>
        <Image style={styles.icUser} source={icUser} />
        <Text style={styles.userName}>User name</Text>
        <View style={styles.logoutStyle}>
          <TouchableOpacity
            style={styles.btnLogout}
            onPress={() => this.props.navigation.push('Account')}>
            <Text style={styles.textLogout}>Thoát</Text>
          </TouchableOpacity>
        </View>
      </View>
    );

    const mainView = this.state.isLogedIn === false ? login : logout;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View styles={styles.newInfo}>
            <View style={styles.containerIcon}>
              <Icon
                name="cart"
                size={25}
                color="white"
                style={[styles.iconCart]}
                onPress={() => this.props.navigation.navigate('Cart')}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Message')}>
                <Image style={[styles.icMessage]} source={icMessage} />
              </TouchableOpacity>
            </View>
          </View>
          {mainView}
        </View>
        <View style={styles.content}>
          <View style={styles.optionStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('OrderHistory')}>
              <View style={styles.coverContent}>
                <View style={styles.containerIconAndTitle}>
                  <Image source={icBill} style={styles.imgStyle} />
                  <Text style={styles.txtTitle}>Đơn mua</Text>
                </View>
                <Icon name="arrow-dropright" size={40} color="gray" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.optionStyle}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('UserInfo')}>
              <View style={styles.coverContent}>
                <View style={styles.containerIconAndTitle}>
                  <Image source={icInfoUser} style={styles.imgStyle} />
                  <Text style={styles.txtTitle}>Thông tin tài khoản</Text>
                </View>
                <Icon name="arrow-dropright" size={40} color="gray" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5b7cc',
  },
  header: {
    height: height / 6,
    backgroundColor: '#ee4d2d',
  },
  newInfo: {
    // height: height / 10,
    // margin: 0,
    // padding: 0,
  },
  infoAccount: {
    flexDirection: 'row',
    height: height / 8,
    justifyContent: 'space-between',
    marginTop: 0,
    padding: 0,
  },
  infoUser: {
    flexDirection: 'row',
    height: height / 8,
    marginTop: 0,
    padding: 0,
  },
  icMessage: {
    width: 25,
    height: 25,
    marginLeft: 0,
  },
  containerIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  iconCart: {
    marginRight: 20,
  },
  containerLogin: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  btnLogin: {
    height: 30,
    width: 85,
    marginRight: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 5,
    paddingTop: 5,
  },
  textLogin: {
    color: 'red',
    fontSize: 15,
  },
  btnRegister: {
    height: 31,
    width: 80,
    marginRight: 10,
    backgroundColor: '#ee4d2d',
    alignItems: 'center',
    paddingTop: 3,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  textRegister: {
    fontSize: 15,
    color: '#fff',
  },
  icUser: {
    width: 48,
    height: 48,
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 15,
    color: '#fff',
  },
  btnLogout: {
    // alignContent: 'flex-end',
    height: 30,
    width: 85,
    marginRight: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 5,
    paddingTop: 5,
  },
  textLogout: {
    color: 'red',
  },
  logoutStyle: {
    marginTop: 10,
    marginLeft: 100,
  },
  content: {
    flexDirection: 'column',
  },
  optionStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  coverContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerIconAndTitle: {
    flexDirection: 'row',
  },
  imgStyle: {
    height: 35,
    width: 35,
  },
  txtTitle: {
    marginTop: 5,
    marginLeft: 15,
    fontSize: 18,
    color: 'black',
  },
});
