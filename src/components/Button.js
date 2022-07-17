import { Text, TouchableHighlight, StyleSheet } from "react-native";
import React from "react";

export default function Button({ color, label, onpress }) {
  return (
    <TouchableHighlight
      style={[styles.Button, { backgroundColor: color }]}
      onPress={onpress}
    >
      <Text style={styles.ButtonLabel}>{label}</Text>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  Button: {
    borderRadius: 20,
  },
  ButtonLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
});