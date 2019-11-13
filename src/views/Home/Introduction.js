import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import bannerImage from '../../assets/imgs/2.png';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-ionicons';
import icMessage from '../../assets/imgs/mess3.png';

import img1 from '../../assets/imgs/1.png';
import img2 from '../../assets/imgs/2.png';
import img3 from '../../assets/imgs/3.png';
import img4 from '../../assets/imgs/4.png';

import pr1 from '../../assets/imgs/img_phone.png';

const {width, height} = Dimensions.get('window');

export default class Introduction extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <TextInput
              style={styles.search}
              underlineColorAndroid="transparent"
              placeholder="Tìm kiếm"
            />
            <View style={styles.containerIcon}>
              <Icon
                name="cart"
                size={32}
                color="white"
                style={styles.iconCart}
                onPress={() => this.props.navigation.navigate('Cart')}
              />
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Message')}>
                <Image style={styles.logo} source={icMessage} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentSaleDeal}>
            <View style={styles.titleContainer}>
              <Text style={styles.textStyleSale}>SALE DEAL</Text>
            </View>
            <View style={styles.banner}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Detail')}>
                <Image style={styles.imageStyleSale} source={bannerImage} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentNewProduct}>
            <View style={styles.titleContainer}>
              <Text style={styles.textStyleProduct}>NEW PRODUCT</Text>
            </View>
            <View style={styles.viewSwiper}>
              <Swiper autoplay={true} autoplayTimeout={4} showsButtons>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ListProduct')}>
                  <Image source={img1} style={styles.imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ListProduct')}>
                  <Image source={img2} style={styles.imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ListProduct')}>
                  <Image source={img3} style={styles.imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ListProduct')}>
                  <Image source={img4} style={styles.imageStyle} />
                </TouchableOpacity>
              </Swiper>
            </View>
          </View>
          <ScrollView style={styles.contentTopProduct}>
            <View style={styles.titleContainer}>
              <Text style={styles.textStyleTop}>TOP PRODUCT</Text>
            </View>
            <View style={styles.bodyTop}>
              <View style={styles.productContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Image source={pr1} style={styles.productImage} />
                </TouchableOpacity>
                <Text style={styles.productName}>PRODUCT NAME</Text>
                <Text style={styles.productPrice}>15,000 VND</Text>
              </View>
              <View style={styles.productContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Image source={pr1} style={styles.productImage} />
                </TouchableOpacity>
                <Text style={styles.productName}>PRODUCT NAME</Text>
                <Text style={styles.productPrice}>15,000 VND</Text>
              </View>
              <View style={styles.productContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Image source={pr1} style={styles.productImage} />
                </TouchableOpacity>
                <Text style={styles.productName}>PRODUCT NAME</Text>
                <Text style={styles.productPrice}>15,000 VND</Text>
              </View>
              <View style={styles.productContainer}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Image source={pr1} style={styles.productImage} />
                </TouchableOpacity>
                <Text style={styles.productName}>PRODUCT NAME</Text>
                <Text style={styles.productPrice}>250,000 VND</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

// 800x300
const imgWidth = width - 40;
const imgHeight = (imgWidth / 800) * 300;

const productWith = (width - 100) / 2;
const productHeight = productWith * (400 / 460);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    height: height / 10,
    padding: 10,
    paddingTop: 5,
    backgroundColor: '#34B089',
    justifyContent: 'space-around',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 2,
  },
  logo: {
    width: 32,
    height: 32,
    marginLeft: 0,
  },
  search: {
    height: height / 18,
    backgroundColor: '#fff',
    width: (width * 2) / 3,
    paddingLeft: 10,
    paddingVertical: 0,
    borderRadius: 5,
  },
  containerIcon: {
    flexDirection: 'row',
    marginLeft: 20,
    justifyContent: 'space-between',
    flex: 4,
  },
  content: {
    backgroundColor: '#b5b7cc',
  },
  banner: {
    flex: 4,
  },
  contentSaleDeal: {
    height: height * 0.27,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    marginBottom: 0,
    borderBottomWidth: 5,
    borderColor: '#b5b7cc',
  },
  imageStyleSale: {
    height: imgHeight,
    width: imgWidth,
    marginLeft: 10,
    marginRight: 10,
  },
  contentNewProduct: {
    height: height * 0.28,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    paddingTop: 0,
    borderBottomWidth: 10,
    borderColor: '#b5b7cc',
  },
  imageStyle: {
    height: imgHeight + 10,
    width: imgWidth,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyleSale: {
    marginLeft: 10,
    fontSize: 15,
    color: '#AFAEAF',
  },
  textStyleProduct: {
    fontSize: 15,
    color: '#AFAEAF',
  },
  viewSwiper: {
    flex: 4,
    justifyContent: 'flex-end',
  },
  contentTopProduct: {
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    borderColor: '#b5b7cc',
  },
  textStyleTop: {
    fontSize: 15,
    color: '#AFAEAF',
    paddingLeft: 10,
    marginTop: 10,
  },
  bodyTop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  productContainer: {
    paddingHorizontal: 0,
    margin: 10,
    borderColor: '#b5b7cc',
    borderWidth: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  productImage: {
    width: productWith,
    height: productHeight,
    marginTop: 10,
    padding: 10,
  },
  productName: {
    paddingLeft: 10,
    paddingTop: 5,
    fontFamily: 'Avenir',
    color: '#D3D3CF',
    fontWeight: '700',
  },
  productPrice: {
    paddingLeft: 10,
    fontFamily: 'Avenir',
    color: '#662F90',
    marginBottom: 5,
  },
});
