import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import NavButton from './NavButton';

export default function({ onNavigate }) {
  return (
    <ScrollView
      style={{ flex: 1 }}
    >
      <NavButton onPress={onNavigate} />
      {Array(100).fill(1).map((i, idx) => (
        <Text key={idx}>This is a line of text; this should start scrolling eventually.</Text>
      ))}
    </ScrollView>
  );
};
