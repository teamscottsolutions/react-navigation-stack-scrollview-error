import React from 'react';

import ScrollViewComponent from '../components/ScrollViewComponent';

/**
 * This works when tabbing, does not scroll after navigating back up
 */
export default function SettingsScreen({ navigation: { push }}) {
  return (
    <ScrollViewComponent
      onNavigate={() => { push('Settings'); }}
    />
  );
};

SettingsScreen.navigationOptions = {
  title: 'Scrolling breaks afters nav',
};
