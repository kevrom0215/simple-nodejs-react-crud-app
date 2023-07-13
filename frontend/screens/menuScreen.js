import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import styles from '../styles/menuStyles'


const MenuScreen = ({navigation}) =>{
    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.Title}>
            <Text>Inventory Management App</Text>
          </View>
          <View style ={styles.row}>
            <TouchableOpacity style = {styles.item} onPress={()=>navigation.navigate('List')}>
            <Text style={styles.text}>View</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.item} onPress={()=>navigation.navigate('Add')}>
              <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
          </View>
          
          <View style ={styles.row}>
            <TouchableOpacity style = {styles.item} onPress={()=>navigation.navigate('Edit')}>
              <Text style={styles.text}>Edit Quantity</Text>
              </TouchableOpacity>
            <TouchableOpacity style = {styles.item}  onPress={()=>navigation.navigate('Delete')}>
              <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
          <TouchableOpacity style = {styles.item} onPress={()=>navigation.navigate('Edit')}>
              <Text style={styles.text}>Export to CSV</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}


export default MenuScreen;