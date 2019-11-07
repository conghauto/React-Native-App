import Icon from 'react-native-ionicons';
import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

import styles from './styles';
import icLogo from '../../assets/imgs/logo.png';

const CustomHeader = ({navigation}) => (
  <View style={[styles.container]}>
    <View style={[styles.header]}>
      <Icon
        name="menu"
        size={32}
        color="black"
        onPress={() => navigation.openDrawer()}
      />
      <Text style={[styles.titleStyle]}>Easy to buy</Text>
      <Image style={[styles.logo]} source={icLogo} />
    </View>
    <TextInput style={[styles.search]} placeholder="Tìm kiếm" />
  </View>
);

export default CustomHeader;
