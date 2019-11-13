import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import map from '../../assets/imgs/map.png';
import address from '../../assets/imgs/location.png';
import Icon from 'react-native-ionicons';

export default class PageContact extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.mapContainer}>
          <Image style={styles.imgMap} source={map} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.rowInfoContainer}>
            <Image source={address} style={styles.imageStyle} />
            <Text style={styles.infoText}>69/12T Đường 120</Text>
          </View>
          <View style={styles.rowInfoContainer}>
            <Icon name="call" style={styles.imageStyle} />
            <Text style={styles.infoText}>(+84) 01694472176</Text>
          </View>
          <View style={styles.rowInfoContainer}>
            <Icon name="mail" style={styles.imageStyle} />
            <Text style={styles.infoText}>dpsgstore@gmail.com</Text>
          </View>
        </View>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#F6F6F6'},
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgMap: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  infoContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: '#FFF',
    margin: 10,
    marginTop: 0,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  rowInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D6D6D6',
  },
  imageStyle: {
    width: 30,
    height: 30,
    color: '#23ab99',
  },
  infoText: {
    fontFamily: 'Avenir',
    color: '#AE005E',
    fontWeight: '500',
    fontSize: 18,
  },
});
