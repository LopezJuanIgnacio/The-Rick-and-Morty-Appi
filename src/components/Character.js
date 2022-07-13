import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Character({ character }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: character.image }}
        style={[
          styles.image,
          {
            borderColor:
              character.status == 'Alive'
                ? 'lime'
                : character.status == 'Dead'
                ? 'tomato'
                : 'gray',
          },
        ]}
      />
      <View>
        <Text style={styles.nombre}>{character.name}</Text>
        <Text style={styles.status}>
          {character.status == 'Alive'
            ? '😀​'
            : character.status == 'Dead'
            ? '💀​'
            : '❓​'}
          {character.status} - {character.species}
        </Text>
        <Text style={styles.label}> Episodes: </Text>
        <Text style={styles.res}>{character.episode.length}</Text>
        <Text style={styles.label}> Location: </Text>
        <Text style={styles.res}>{character.location.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    alignItems: 'center',
    color: '#fff',
    marginVertical: 15,
    flexDirection: 'row',
    width: 350,
    height: 200,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    resizeMode: 'contain',
  },
  nombre: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  status: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  res: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
})
