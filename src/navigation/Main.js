import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import CharactersNavigator from './CharactersNavigator'
import AddNavigation from './AddNavigation'
import { Locations } from '../screens/'

const BottomTabs = createBottomTabNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Characters"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: 'lime',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#1a1a1a',
          },
        })}
      >
        <BottomTabs.Screen
          name="Characters"
          component={CharactersNavigator}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'people' : 'people-outline'} size={24} color={focused ? "lime": "white"} />,
          }}
        />
        <BottomTabs.Screen
          name="Locations"
          component={Locations}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={focused ? "lime": "white"}/>,
          }}
        />
        <BottomTabs.Screen
          name="Add"
          component={AddNavigation}
          options={{
            tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'add' : 'add-outline'} size={24} color={focused ? "lime": "white"} />,
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
