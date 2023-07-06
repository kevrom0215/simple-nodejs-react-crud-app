import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from "../styles/homeStyles"


const HomeScreen = () => {
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchData = async () => {
      try{
        const response = await fetch('http://10.0.2.2:3000')
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
      
    </View>
  )
}



export default HomeScreen;