import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

import img1 from '../../assets/imgs/1.png';
import img2 from '../../assets/imgs/2.png';
import img3 from '../../assets/imgs/3.png';
import img4 from '../../assets/imgs/4.png';

const {width, height} = Dimensions.get('window');

export default class NewProduct extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.textTitleNewProduct}>
          <Text style={styles.textStyle}>NEW PRODUCT</Text>
        </View>
        <View style={styles.viewSwiper}>
          <Swiper autoplay={true} autoplayTimeout={4} showsButtons>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Details')}>
              <Image source={img1} style={styles.imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={img2} style={styles.imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={img3} style={styles.imageStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={img4} style={styles.imageStyle} />
            </TouchableOpacity>
          </Swiper>
        </View>
      </View>
    );
  }
}

// 800x300
const imgWidth = width - 40;
const imgHeight = (imgWidth / 800) * 300 + 10;

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.28,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
  },
  imageStyle: {
    height: imgHeight,
    width: imgWidth,
  },
  textTitleNewProduct: {
    flex: 1,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
    color: '#AFAEAF',
  },
  viewSwiper: {
    flex: 4,
    justifyContent: 'flex-end',
  },
});
