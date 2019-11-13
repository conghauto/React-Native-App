import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';

import img1 from '../../assets/imgs/img_phone.png';
import Icon from 'react-native-ionicons';

export default class DetailProduct extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.cardStyle}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={styles.backStyle} color="green" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon name="cart" style={styles.cartStyle} color="green" />
            </TouchableOpacity>
          </View>
          <View style={styles.imageContainer}>
            <ScrollView style={styles.imgProduct} horizontal>
              <Image source={img1} style={styles.productImageStyle} />
              <Image source={img1} style={styles.productImageStyle} />
            </ScrollView>
          </View>
          <View style={styles.footer}>
            <View style={styles.titleContainer}>
              <Text style={styles.textMain}>
                <Text style={styles.textBlack}>
                  {'back of the'.toUpperCase()}
                </Text>
                <Text style={styles.textHighlight}> / </Text>
                <Text style={styles.textSmoke}>100$</Text>
              </Text>
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.descStyle}>
                A delicate layer of eyelash lace brings dreamy elegance to this
                piece, while smooth, lightweight lining feels luxurious against
                your skin. We love it with heels for a look that fits in on date
                night, or with cool booties to add an edge.
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 15,
                }}>
                <Text style={styles.txtMaterial}>Material Fur</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.txtColor}>Color Black</Text>
                  <View
                    style={{
                      height: 15,
                      width: 15,
                      backgroundColor: 'black'.toLowerCase(),
                      borderRadius: 15,
                      marginLeft: 10,
                      borderWidth: 1,
                      borderColor: '#C21C70',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const swiperWidth = width / 1.8 - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#D6D6D6',
  },
  cardStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  imgProduct: {
    flexDirection: 'row',
    padding: 10,
    height: swiperHeight,
  },
  cartStyle: {
    width: 25,
    height: 25,
  },
  backStyle: {
    width: 25,
    height: 25,
  },
  productStyle: {
    width: width / 2,
    height: width / 2,
  },
  footer: {
    flex: 6,
  },
  imageContainer: {
    flex: 6,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  textMain: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  textBlack: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F3F46',
  },
  textSmoke: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#9A9A9A',
  },
  textHighlight: {
    fontFamily: 'Avenir',
    fontSize: 20,
    color: '#7D59C8',
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: '#F6F6F6',
    marginHorizontal: 20,
    paddingBottom: 5,
  },
  descContainer: {
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  descStyle: {
    color: '#AFAFAF',
  },
  linkStyle: {
    color: '#7D59C8',
  },
  productImageStyle: {
    width: swiperWidth,
    height: swiperHeight,
    marginHorizontal: 5,
  },
  mainRight: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    paddingLeft: 20,
  },
  txtColor: {
    color: '#C21C70',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtMaterial: {
    color: '#C21C70',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
});
