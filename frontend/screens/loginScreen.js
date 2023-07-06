import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from "../styles/loginStyles";

const LoginScreen = () => {
    const iconLogo = require("../assets/ayaka.png")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
      console.log('Login pressed');
      
      if((userCred === email)&&(pw === password) ){
        console.log("Login Success")
      }
      else{
        console.log("Invalid User Credentials")
      }
    };
  
    
  
    const userCred = "kenneth";
    const pw = "kiss";
    
  
  
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
            onChangeText={(password) => setPassword(password)}/>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={{color: "white"}}>Login</Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    );
}



export default LoginScreen;