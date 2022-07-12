import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Character from './Character.js'

export default function CharacterList({ characters }) {
  console.log(characters)
  const keyExtractor = (character) => character.id.toString()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favourite Characters</Text>
      <FlatList
        data={characters}
        renderItem={({ character }) => <Character character={character} />}
        keyExtractor={keyExtractor}
      />
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
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  }
});
