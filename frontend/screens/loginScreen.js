import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import styles from "../styles/loginStyles";
import { BASE_URL } from '@env';
import { encode as base64Encode } from 'base-64';

const LoginScreen = ({navigation}) => {
    const iconLogo = require("../assets/ayaka.png")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
      console.info('Login pressed');
      try{
        const loginData = {
          username: email,
          password: password
        };
        const authHeader = 'Basic ' + base64Encode(`${email}:${password}`);

        fetch(`${BASE_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authHeader,
          },
          body: JSON.stringify(loginData),
        })
        .then((response) => {
          if (response.ok) {
            // Login successful
            Alert.alert('Success', 'Logged in successfully.');
            // Perform any additional actions upon successful login
            navigation.navigate('Menu')
          } else {
            // Login failed
            Alert.alert('Error', 'Invalid username or password.');
          }
        })
        .catch((error) => {
          // Error occurred during the request
          Alert.alert('Error', 'An error occurred. Please try again later.');
        });
      }
      catch(error){
        Alert.alert('Error', 'Please enter some text.')
      }
    };
  
    
  
    
  
  
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image style={styles.logoStyle} source={iconLogo}/>
        </View>
        <View style={styles.formContainer}>
          <TextInput style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}/>
          <TextInput style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}/>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={{color: "#ffffff"}}>Login</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
}



export default LoginScreen;