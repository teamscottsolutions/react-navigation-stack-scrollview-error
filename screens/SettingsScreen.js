import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

export default function SettingsScreen({ navigation: { push }}) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => { push('Settings'); }}>
        <Text>Link</Text>
      </TouchableOpacity>
      {Array(100).fill(1).map((i, idx) => (
        <Text key={idx}>This is a line of text; this should start scrolling eventually.</Text>
      ))}
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
