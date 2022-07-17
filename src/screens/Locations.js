import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Loading from "../../assets/Loading.gif";
import React, { useState, useEffect } from "react";
import { List } from "../components/";

export default function Locations({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await fetch(
        `https://rickandmortyapi.com/api/location?page=${page}`
      );
      const { results } = await data.json();
      setContent([...results]);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Image source={Loading} style={styles.loading} />
      ) : (
        <List
          type="locations"
          content={content}
          setPage={setPage}
          page={page}
        />
      )}
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
  scroll: {
    flex: 1,
  },
});
