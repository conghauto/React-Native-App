import Icon from 'react-native-ionicons';
import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

import styles from './styles';
import icMessage from '../../assets/imgs/mess3.png';
import Cart from '../../views/Cart/Cart';

const CustomHeader = ({navigation}) => (
  <View style={[styles.container]}>
    <View style={[styles.header]}>
      <TextInput
        style={[styles.search]}
        underlineColorAndroid="transparent"
        placeholder="Tìm kiếm"
      />
      <View style={[styles.containerIcon]}>
        <Icon
          name="cart"
          size={32}
          color="white"
          style={[styles.iconCart]}
          onPress={() => navigation.navigate(Cart)}
        />
        <Image style={[styles.logo]} source={icMessage} />
      </View>
    </View>
  </View>
);

export default CustomHeader;
