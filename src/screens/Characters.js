import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Loading from '../../assets/Loading.gif'
import React, { useState, useEffect } from 'react'
import { CharacterList } from '../components/'

export default function Characters() {
  const [loading, setLoading] = useState(true)
  const [content, setContent] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      const { results } = await data.json()
      setContent(content=>[...content, ...results])
      setLoading(false)
    }
    fetchData()
  }, [page])

  return (
    <View style={styles.container}>
      {loading ? (
        <Image source={Loading} style={styles.loading} />
      ) : (
        <>
          <CharacterList characters={content} />
          <View style={styles.Button} onPress={()=>setPage(page+1)} >
            <Text style={styles.ButtonLabel}>Load more</Text>
          </View>
        </>
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
  },
  Button: {
    backgroundColor: 'lime',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  ButtonLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  scroll: {
    flex:1,
  }
})
