import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Locations, LocationScreen } from '../screens'

const Stack = createNativeStackNavigator()

const LocationsNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName="Locations"
    screenOptions={({ route }) => ({
      headerShown: false,
    })}
    >
      <Stack.Screen name="Locations" component={Locations} />
      <Stack.Screen name="Location" component={LocationScreen} />
    </Stack.Navigator>
  )
}

export default LocationsNavigator
