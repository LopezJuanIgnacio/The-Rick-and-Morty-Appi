import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import React, { useState, useEffect } from 'react'
import Loading from '../../assets/Loading.gif'

export default function CharacterScreen({ navigation, route }) {
  const { id } = route.params
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await res.json()
    setCharacter(data)
    setLoading(false)
  }, [])

  return (
    <View style={styles.container}>
      {loading ? (
        <Image source={Loading} style={styles.loading} />
      ) : (
        <View style={styles.box}>
          <Image
            source={{ uri: character.image }}
            style={[
              styles.img,
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
          <Text style={styles.title}>{character.name}</Text>
          <Text style={styles.status}>
            {
              character.status == 'Alive'
              ? '😀​'
              : character.status == 'Dead'
              ? '💀​'
              : '❓​'
            }
            {character.status} - {character.species} - {character?.type}
          </Text>
          <Text style={styles.label}> Gender: </Text>
          <Text style={styles.res}>{character.gender}</Text>
          <Text style={styles.label}> Episodes: </Text>
          <Text style={styles.res}>{character.episode.length}</Text>
          <Text style={styles.label}> Location: </Text>
          <Text style={styles.res}>{character.location?.name}</Text>
          <TouchableHighlight style={styles.Button}><Text> More </Text></TouchableHighlight> 
          <Text style={styles.label}> Origin: </Text>
          <Text style={styles.res}>{character.origin?.name}</Text>
          <TouchableHighlight style={styles.Button}><Text> More </Text></TouchableHighlight> 
        </View>
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
    padding: 30,
  },
  loading: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#fff',
    padding: 30,
    borderRadius: 20,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
  },
  status: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
  },
  label: {
    fontSize: 26,
    color: 'lime',
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  res: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
  Button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginLeft: 15,
    marginTop: 10,
    alignSelf: 'flex-start',
  }
})
