import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
} from 'react-native'
import React from 'react'
import Character from './Character.js'

export default function CharacterList({ characters, setPage, page, loading }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favourite Characters</Text>
      <FlatList
        data={characters}
        renderItem={({ item }) => <Character character={item} />}
        keyExtractor={(item) => item.id}
      />
      {!loading && (
        <TouchableHighlight
          style={styles.Button}
          onPress={() => {
            setPage((page) => page + 1)
            console.log(page)
          }}
        >
          <Text style={styles.ButtonLabel}>Load more</Text>
        </TouchableHighlight>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginVertical: 30,
  },

  Button: {
    backgroundColor: 'lime',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  ButtonLabel: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
})
