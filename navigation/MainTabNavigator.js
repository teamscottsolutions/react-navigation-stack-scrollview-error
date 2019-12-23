import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FixedSettingsScreen from '../screens/FixedSettingsScreen';
import FlatListSettingsScreen from '../screens/FlatListSettingsScreen';
import FixedFlatListSettingsScreen from '../screens/FixedFlatListSettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const createSettingsNavigator = (key, screen, tabBarLabel) => {
  const StackNavigator = createStackNavigator(
    {
      [key]: screen,
    },
    config
  );

  StackNavigator.navigationOptions = {
    tabBarLabel,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
    ),
  };

  StackNavigator.path = '';

  return StackNavigator;
};

const tabNavigator = createBottomTabNavigator({
  SettingsStack: createSettingsNavigator('Settings', SettingsScreen, 'ScrollView (broken)'),
  FixedSettingsStack: createSettingsNavigator('FixedSettings', FixedSettingsScreen, 'ScrollView (fixed)'),
  FlatListSettingsStack: createSettingsNavigator('FlatListSettings', FlatListSettingsScreen, 'FlatList (broken)'),
  FixedFlatListSettingsStack: createSettingsNavigator('FixedFlatListSettings', FixedFlatListSettingsScreen, 'FlatList (fixed)'),
}, {
  order: ['SettingsStack', 'FixedSettingsStack', 'FlatListSettingsStack', 'FixedFlatListSettingsStack'],
});

tabNavigator.path = '';

export default tabNavigator;
