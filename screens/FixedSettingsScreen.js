import React from 'react';
import { withNavigationFocus } from 'react-navigation';

import ScrollViewComponent from '../components/ScrollViewComponent';

/**
 * Redrawing after focus forces a re-render, which probably causes
 * ScrollView to recalcuate the size.
 */
const FixedSettingsScreen = function({ isFocused, navigation: { push } }) {
  if (!isFocused) {
    return null;
  }
  return (
    <ScrollViewComponent
      onNavigate={() => { push('FixedSettings'); }}
    />
  );
}

FixedSettingsScreen.navigationOptions = {
  title: 'Scrolling works afters nav',
};

export default withNavigationFocus(FixedSettingsScreen);
