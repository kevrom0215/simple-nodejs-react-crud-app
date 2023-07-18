import { useState, useEffect, useRef } from 'react';
import { Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import styles from "../styles/homeStyles"
import { BASE_URL } from '@env';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const HomeScreen = ( {navigation} ) => {
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [timer, setTimer] = useState(0);
  const timerRef = useRef(null);
  
  useEffect(() =>{
  const fetchData = async () => {
    try{
      const body = {
        item: "kenneth"
      }

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
      const response = await fetch(`${BASE_URL}/order/get`, options)
      if(!response.ok){
        throw new Error('Request failed with status ' + response.status)
      }
      const data = await response.json();
      const dateTriggered = new Date(data.date_triggered)
      const currentDate = new Date();
      var pass;
      if(currentDate.getDate() <= dateTriggered.getDate() ){
        pass = false;
        startTimer(pass)
      }
      else{
        pass = true
        startTimer(pass)
      }
    }catch(error){
        console.log('Error fetching data: ',error)
      }
    };
    fetchData();

    return () => {
      clearTimeout(timerRef.current);
    }
  }, []);

  const startTimer = (pass) => {
    if(pass){
      setTimer(1)
      setIsButtonEnabled(true)

    }
    else{
      setIsButtonEnabled(false)
      const startDate = new Date()
      const endDate = new Date()
      endDate.setDate(endDate.getDate() + 1)
      endDate.setHours(0, 0, 0, 0); // Set end date to midnight
      const remainingTime = Math.floor((endDate.getTime() - startDate.getTime()) / 1000);
      setTimer(remainingTime)
    }
    

    timerRef.current = setInterval(() => {
      setTimer(prevTimer => {
        if(prevTimer === 1){
          clearTimeout(timerRef.current);
          setIsButtonEnabled(true)
        }
        return prevTimer - 1;
      })
    }, 1000); 
  };

  const buttonPress = () =>{
    handleUpdate()
    startTimer(false) //reset Timer
    setIsButtonEnabled(false); // Disable the button
  }


  const handleUpdate =() =>{
    console.log("Button Timer Updating")
    try{
      const buttonData = {
        item: "",//edit in the future
      }
      fetch(`${BASE_URL}/order`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(buttonData)
    })
    .then((response) =>{
      if(response.ok){
          Alert.alert('Success');
          console.log(`Updated Button`)
      }
      else{
          Alert.alert('Error', 'Invalid Request')
      }
  })
    }
    catch(e){
      Alert.alert('Error','Invalid Request')
    }
  }
  
  return(
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
        <Text>Enter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, !isButtonEnabled && styles.disabledButton]} onPress={buttonPress} disabled={!isButtonEnabled}>
        <Text>{isButtonEnabled ? 'Enabled' : `Disabled (${timer})`}</Text>
      </TouchableOpacity>
      
    </View>
  )
}



export default HomeScreen;