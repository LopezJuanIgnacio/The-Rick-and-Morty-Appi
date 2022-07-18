import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function Input({ name, value, onChange, type="default" }) {
  return (
    <TextInput
      placeholder={name}
      placeholderTextColor="#fff"
      value={value}
      onChangeText={(text) => onChange(name, text)}
      style={styles.Input}
      keyboardType={type}
    />
  );
}
const styles = StyleSheet.create({
  Input: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "lime",
    
  },
});
