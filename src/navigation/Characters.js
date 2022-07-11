import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Characters, Character } from '../screens'

const Stack = createNativeStackNavigator()

const CharactersNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Characters"
    screenOptions={({ route }) => ({
      headerShown: false,
    })}
    >
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="Character" component={Character} />
    </Stack.Navigator>
  )
}

export default CharactersNavigator
