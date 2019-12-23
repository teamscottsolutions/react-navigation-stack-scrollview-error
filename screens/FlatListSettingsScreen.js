import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { View, FlatList, ScrollView, Text, TouchableOpacity } from 'react-native';

import FlatListComponent from '../components/FlatListComponent';

/**
 * This also works when tabbing, does not scroll after navigating back up
 */
export default function FlatListSettingsScreen({ navigation: { push }}) {
  return (
    <FlatListComponent
      onNavigate={() => { push('FlatListSettings'); }}
    />
  );
}

FlatListSettingsScreen.navigationOptions = {
  title: 'Scrolling breaks afters nav',
};
