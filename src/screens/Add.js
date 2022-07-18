import { View, Text, StyleSheet, Image, Alert, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permission from "expo-permissions";
import { saveCharacter } from "../store/characters.slice";
import { useDispatch } from "react-redux";
import { Input, Button } from "../components/";

export default function Add({ navigation, route }) {
  const [Form, setForm] = useState({status: "Alive"});
  const dispatch = useDispatch();

  const handleChange = (name, value) => setForm({ ...Form, [name]: value });
  const handleSubmit = () => {
    if (
      Form.name &&
      Form.status &&
      Form.species &&
      Form.type &&
      Form.location &&
      Form.episode &&
      Form.image
    ) {
      dispatch(saveCharacter(Form));
      navigation.navigate("OwnCharacters");
    }else Alert.alert("Error", "Please fill all the fields");
  };

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "We need your permission to use your camera",
        "so please allow us :)",
        [{ text: "OK" }]
      );
      return false;
    }
    return true;
  };

  const handleTakeImage = async () => {
    const isCameraPermissionGranted = await verifyPermissions();
    if (!isCameraPermissionGranted) return;

    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    setForm({ ...Form, image: image.uri });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.form}>
        <Text style={styles.title}>Add A New Character</Text>
        <Input name="name" value={Form.name} onChange={handleChange} />
        <Picker
          selectedValue={Form.status}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            handleChange("status", itemValue)
          }
        >
          <Picker.Item label="Alive" value="Alive" />
          <Picker.Item label="Dead" value="Dead" />
          <Picker.Item label="unknown" value="unknown" />
        </Picker>
        <Input name="species" value={Form.species} onChange={handleChange} />
        <Input name="type" value={Form.type} onChange={handleChange} />
        <Input name="location" value={Form.location} onChange={handleChange} />
        <Input
          name="episode"
          value={Form.episode}
          onChange={handleChange}
          type="numeric"
        />
        <Button onpress={handleTakeImage} label="Pick an image" color="lime" />
        {Form.image ? (
          <>
            <Text style={styles.title}>Image:</Text>
            <Image
              source={{ uri: Form.image }}
              style={[
                styles.image,
                {
                  borderColor:
                    Form.status == "Alive"
                      ? "lime"
                      : Form.status == "Dead"
                      ? "tomato"
                      : "gray",
                },
              ]}
            />
          </>
        ) : (
          <Text style={styles.err}>No Selected Image</Text>
        )}
        <Button onpress={handleSubmit} label="Save Character" color="lime" />
      </ScrollView>
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  form: {
    width: "100%",
    height: "100%",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    paddingTop: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    resizeMode: "contain",
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 200,
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "lime",
    marginBottom: 20,
  },
  err: {
    color: "red",
    fontSize: 20,
    marginBottom: 20,
  },
});
