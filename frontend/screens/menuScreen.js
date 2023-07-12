import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import styles from '../styles/menuStyles'


const MenuScreen = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
          <View style ={styles.row}>
            <TouchableOpacity style = {styles.item} onPress={()=>navigation.navigate('List')}>
            <Text style={styles.text}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.item}>
              <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
          </View>
          
          <View style ={styles.row}>
            <TouchableOpacity style = {styles.item}>
              <Text style={styles.text}>Edit</Text>
              </TouchableOpacity>
            <TouchableOpacity style = {styles.item}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}


export default MenuScreen;