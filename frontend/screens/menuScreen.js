import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/menuStyles'


const MenuScreen = () =>{
    return(
        <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text>Hello</Text>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.navigate('Login')}>
          <Text>Next</Text>
        </TouchableOpacity>
        
      </View>
    )
}


export default MenuScreen;