import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from "react-native";
import React from "react";
import Character from "./Character.js";
import Button from "./Button.js";

export default function List({ type, content, setPage, page }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favourite {type} </Text>
      <Text style={styles.page}>Page: {page}</Text>
      <FlatList
        style={styles.list}
        data={content}
        renderItem={({ item }) =>
          type === "characters" ? <Character character={item} /> : null
        }
        keyExtractor={(item) => item.id}
      />
      <View style={styles.Botonera}>
        <Button
          onpress={() => setPage((page) => (page !== 1 ? page - 1 : page))}
          label="Previous"
          color="lime"
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        />
        <Button
          onpress={() => setPage((page) => page + 1)}
          label="Next"
          color="lime"
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginVertical: 60,
  },
  list: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#111",
    color: "#fff",
  },
  Button: {
    backgroundColor: "lime",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },
  ButtonLabel: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  page: {
    fontSize: 24,
    color: "lime",
    fontWeight: "bold",
  },
  Botonera: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
