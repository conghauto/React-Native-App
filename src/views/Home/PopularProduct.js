import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import bannerImage from '../../assets/imgs/2.png';

const {width, height} = Dimensions.get('window');

export default class PopularProduct extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.textTitleNewProduct}>
          <Text style={styles.textStyle}>NEW PRODUCT</Text>
        </View>
        <View style={{flex: 4}}>
          <Image style={styles.imageStyle} source={bannerImage} />
        </View>
      </View>
    );
  }
}

// 800x300
const imgWidth = width - 40;
const imgHeight = imgWidth * (300 / 800);

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.27,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  textTitleNewProduct: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  textStyle: {
    fontSize: 15,
    color: '#AFAEAF',
  },
  imageStyle: {
    height: imgHeight,
    width: imgWidth,
    marginLeft: 10,
    marginRight: 10,
  },
});
