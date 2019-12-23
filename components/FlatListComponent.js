import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import NavButton from './NavButton';

export default function({ onNavigate }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Array(100).fill(1).map((i, idx) => ({ id: idx }))}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <Text key={item.id}>This is a line of text; this should start scrolling eventually.</Text>
        )}
        ListHeaderComponent={() => (
          <NavButton onPress={onNavigate} />
        )}
      />
    </View>
  );
};
