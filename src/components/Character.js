import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native'
import React, {useContext} from 'react'
import { NavContext } from '../screens/Characters'

export default function Character({ character }) {
  const  navigation  = useContext(NavContext)
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
        <TouchableWithoutFeedback onPress={()=> navigation.navigate('Character', {Id: character.id})} >
          <Text style={styles.more}>See more</Text>
        </TouchableWithoutFeedback>
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
    height: 240,
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
  more: {
    fontSize: 16,
    color: 'lime',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  }
})
