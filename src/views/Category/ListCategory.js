import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-ionicons';
import pr1 from '../../assets/imgs/img_phone.png';

export default class ListCategory extends Component {
  render() {
    const {types} = this.props;
    return (
      <View styles={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" size={30} color="#B10D65" />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>List Product</Text>
            <View style={{width: 30}} />
          </View>
          <View />
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={pr1} />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>50, 000 VND</Text>
              <Text style={styles.txtMaterial}>Material silk</Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.imgColor} />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={pr1} />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>50, 000 VND</Text>
              <Text style={styles.txtMaterial}>Material silk</Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.imgColor} />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={pr1} />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>50, 000 VND</Text>
              <Text style={styles.txtMaterial}>Material silk</Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.imgColor} />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={pr1} />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>50, 000 VND</Text>
              <Text style={styles.txtMaterial}>Material silk</Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.imgColor} />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={pr1} />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>50, 000 VND</Text>
              <Text style={styles.txtMaterial}>Material silk</Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.imgColor} />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={pr1} />
            <View style={styles.productInfo}>
              <Text style={styles.txtName}>Lace Sleeve Si</Text>
              <Text style={styles.txtPrice}>50, 000 VND</Text>
              <Text style={styles.txtMaterial}>Material silk</Text>
              <View style={styles.lastRowInfo}>
                <Text style={styles.txtColor}>Color RoyalBlue</Text>
                <View style={styles.imgColor} />
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Detail')}>
                  <Text style={styles.txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b5b7cc',
    // padding: 10,
  },
  header: {
    height: 40,
    flexDirection: 'row', // display in a row
    justifyContent: 'space-between',
    backgroundColor: '#b5b7cc',
    padding: 5,
  },
  wrapper: {
    backgroundColor: '#e5ecf4',
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    margin: 10,
  },
  titleStyle: {
    fontSize: 20,
    color: '#B10D65',
    fontFamily: 'Avenir',
  },
  productContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingRight: 5,
    paddingBottom: 10,
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderColor: '#fff',
  },
  productImage: {
    width: 90,
    height: 90 * (400 / 460),
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productInfo: {
    justifyContent: 'space-between',
    marginLeft: 15,
    flex: 1,
  },
  txtName: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '400',
    color: '#30282d',
  },
  txtPrice: {
    fontFamily: 'Avenir',
    color: '#B10D65',
  },
  txtColor: {
    fontFamily: 'Avenir',
  },
  txtShowDetail: {
    fontFamily: 'Avenir',
    color: '#B10D65',
    fontSize: 11,
  },
  imgColor: {
    backgroundColor: 'blue',
    width: 13,
    height: 13,
    borderRadius: 10,
    marginLeft: 5,
  },
});
