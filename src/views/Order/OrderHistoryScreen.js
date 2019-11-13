import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import icBack from '../../assets/imgs/back_right.png';

export default class OrderHistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {arrOrder: []};
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.orderRow}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Order id:
                </Text>
                <Text style={{color: '#2ABB9C'}}>ORD001</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  OrderTime:
                </Text>
                <Text style={{color: '#C21C70'}}>2019-11-14 08:30:08</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Status:
                </Text>
                <Text style={{color: '#2ABB9C'}}>Pending</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Total:
                </Text>
                <Text style={{color: '#C21C70', fontWeight: 'bold'}}>100$</Text>
              </View>
            </View>

            <View style={styles.orderRow}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Order id:
                </Text>
                <Text style={{color: '#2ABB9C'}}>ORD001</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  OrderTime:
                </Text>
                <Text style={{color: '#C21C70'}}>2019-11-14 08:30:08</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Status:
                </Text>
                <Text style={{color: '#2ABB9C'}}>Pending</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Total:
                </Text>
                <Text style={{color: '#C21C70', fontWeight: 'bold'}}>100$</Text>
              </View>
            </View>

            <View style={styles.orderRow}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Order id:
                </Text>
                <Text style={{color: '#2ABB9C'}}>ORD001</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  OrderTime:
                </Text>
                <Text style={{color: '#C21C70'}}>2019-11-14 08:30:08</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Status:
                </Text>
                <Text style={{color: '#2ABB9C'}}>Pending</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Total:
                </Text>
                <Text style={{color: '#C21C70', fontWeight: 'bold'}}>100$</Text>
              </View>
            </View>
            <View style={styles.orderRow}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Order id:
                </Text>
                <Text style={{color: '#2ABB9C'}}>ORD001</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  OrderTime:
                </Text>
                <Text style={{color: '#C21C70'}}>2019-11-14 08:30:08</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Status:
                </Text>
                <Text style={{color: '#2ABB9C'}}>Pending</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Total:
                </Text>
                <Text style={{color: '#C21C70', fontWeight: 'bold'}}>100$</Text>
              </View>
            </View>
            <View style={styles.orderRow}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Order id:
                </Text>
                <Text style={{color: '#2ABB9C'}}>ORD001</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  OrderTime:
                </Text>
                <Text style={{color: '#C21C70'}}>2019-11-14 08:30:08</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Status:
                </Text>
                <Text style={{color: '#2ABB9C'}}>Pending</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#9A9A9A', fontWeight: 'bold'}}>
                  Total:
                </Text>
                <Text style={{color: '#C21C70', fontWeight: 'bold'}}>100$</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#fff'},
  body: {flex: 10, backgroundColor: '#F6F6F6'},
  orderRow: {
    height: width / 3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: {width: 2, height: 2},
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around',
  },
});
