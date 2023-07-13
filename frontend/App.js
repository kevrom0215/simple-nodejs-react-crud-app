import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homeScreen';
import LoginScreen from './screens/loginScreen';
import MenuScreen from './screens/menuScreen';
import ListScreen from './screens/ListScreen';
import AddScreen from './screens/addScreen';
import DeleteScreen from './screens/deleteScreen';
import EditScreen from './screens/editScreen';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Menu" component={MenuScreen}/>
        <Stack.Screen name="List" component={ListScreen}/>
        <Stack.Screen name="Add" component={AddScreen}/>
        <Stack.Screen name="Delete" component={DeleteScreen}/>
        <Stack.Screen name="Edit" component={EditScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;