import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 250,
    margin: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default function({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>
        Click to Navigate
      </Text>
    </TouchableOpacity>
  );
};
