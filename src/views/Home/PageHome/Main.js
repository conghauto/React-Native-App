import React, {Component} from 'react';
import {View} from 'react-native';
import NewProduct from '../NewProduct';
import PopularProduct from '../PopularProduct';

export default class Main extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#DBDBD8'}}>
        <PopularProduct />
        <NewProduct />
        {/* <Button
          title="To Secondary"
          onPress={() => this.props.navigation.navigate('Secondary')}
        /> */}
      </View>
    );
  }
}
