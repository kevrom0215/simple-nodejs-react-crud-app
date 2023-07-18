import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Image, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import styles from "../styles/stockStyles"
const Stack = createNativeStackNavigator();

const StockScreen = ( {navigation} ) =>{
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

export default StockScreen;