import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-ionicons';
import React from 'react';

import PageHome from '../../views/Home/PageHome';
import PageAccount from '../../views/Home/PageAccount';
import PageSearch from '../../views/Home/PageSearch';
import PageContact from '../../views/Home/PageContact';

const CustomTabNavigator = createBottomTabNavigator(
  {
    Home: {screen: PageHome},
    Search: {screen: PageSearch},
    Contact: {screen: PageContact},
    Me: {screen: PageAccount},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Search') {
          iconName = 'search';
        } else if (routeName === 'Contact') {
          iconName = 'call';
        } else if (routeName === 'Me') {
          iconName = 'contact';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default CustomTabNavigator;
