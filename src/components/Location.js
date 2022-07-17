import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Location({ location }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>{location.name}</Text>
      <Text style={styles.label}> Type: </Text>
      <Text style={styles.res}>{location.type}</Text>
      <Text style={styles.label}> Dimension: </Text>
      <Text style={styles.res}>{location.dimension}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    alignItems: "center",
    color: "#fff",
    marginVertical: 15,
    width: 350,
    height: 240,
    borderRadius: 10,
    padding: 10,
  },
  nombre: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  label: {
    fontSize: 26,
    color: "lime",
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  res: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
