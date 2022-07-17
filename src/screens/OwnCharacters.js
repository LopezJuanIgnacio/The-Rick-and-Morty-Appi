import { View, StyleSheet, TouchableHighlight } from "react-native";
import React, { useEffect } from "react";
import { List } from "../components/";
import { loader } from "../store/characters.slice";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Characters({ navigation, route }) {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.characters);

  useEffect(() => {
    dispatch(loader());
  }, []);

  return (
    <View style={styles.container}>
      <List type="ownCharacters" content={characters} />
      <TouchableHighlight style={styles.addButton} onPress={()=> navigation.navigate("Add")} >
        <Ionicons  name='add' size={36} color="white" />
      </TouchableHighlight>
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
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "lime",
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
