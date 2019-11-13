import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import sp1 from '../../../assets/imgs/img_phone.png';

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );
}

export default class SearchScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <View style={styles.product}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Detail')}>
            <Image source={sp1} style={styles.productImage} />
          </TouchableOpacity>
          <View style={styles.mainRight}>
            <Text style={styles.txtName}>{toTitleCase('black dress')}</Text>
            <Text style={styles.txtPrice}>100$</Text>
            <Text style={styles.txtMaterial}>Material Fur</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txtColor}>Color white</Text>
              <View
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginLeft: 10,
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.showDetailContainer}
              onPress={() => this.props.navigation.navigate('Detail')}>
              <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.product}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Detail')}>
            <Image source={sp1} style={styles.productImage} />
          </TouchableOpacity>
          <View style={styles.mainRight}>
            <Text style={styles.txtName}>{toTitleCase('black dress')}</Text>
            <Text style={styles.txtPrice}>100$</Text>
            <Text style={styles.txtMaterial}>Material Fur</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.txtColor}>Color white</Text>
              <View
                style={{
                  height: 15,
                  width: 15,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  marginLeft: 10,
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.showDetailContainer}
              onPress={() => this.props.navigation.navigate('Detail')}>
              <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const {width} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
  product: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center',
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between',
  },
  productController: {
    flexDirection: 'row',
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtColor: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtMaterial: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Avenir',
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right',
  },
  showDetailContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 100,
  },
});
