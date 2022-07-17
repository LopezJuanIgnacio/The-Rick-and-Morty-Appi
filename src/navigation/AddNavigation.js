import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Add, OwnCharacters } from '../screens'

const Stack = createNativeStackNavigator()

const CharactersNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="OwnCharacters"
    screenOptions={({ route }) => ({
      headerShown: false,
    })}
    >
      <Stack.Screen name="OwnCharacters" component={OwnCharacters} />
      <Stack.Screen name="Add" component={Add} />
    </Stack.Navigator>
  )
}

export default CharactersNavigator
