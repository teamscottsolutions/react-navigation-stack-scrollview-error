import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { withNavigationFocus } from 'react-navigation';
import { View, FlatList, ScrollView, Text, TouchableOpacity } from 'react-native';

import FlatListComponent from '../components/FlatListComponent';

/**
 * Redrawing after focus forces a re-render, which probably causes
 * ScrollView to recalcuate the size.
 */
const FixedFlatListSettingsScreen = function({ isFocused, navigation: { push }}) {
  if (!isFocused) {
    return null;
  }
  return (
    <FlatListComponent
      onNavigate={() => { push('FixedFlatListSettings'); }}
    />
  );
}

FixedFlatListSettingsScreen.navigationOptions = {
  title: 'Scrolling works afters nav',
};

export default withNavigationFocus(FixedFlatListSettingsScreen);
