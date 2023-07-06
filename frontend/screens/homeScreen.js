import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from "../styles/homeStyles"
import { BASE_URL } from '@env';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const HomeScreen = ( {navigation} ) => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchData = async () => {
      try{
        const response = await fetch(BASE_URL)
        const data = await response.json();
        setMessage(data)
        setLoading(false);
      }catch(error){
        console.log('Error fetching data: ',error)
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  
  return(
    <View style={styles.container}>
      <View style={styles.textContainer}>
      {loading ? (
          <Text>Loading...</Text>
        ) : (
          <Text>{message.message}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.navigate('Login')}>
        <Text>Next</Text>
      </TouchableOpacity>
      
    </View>
  )
}



export default HomeScreen;