import { SafeAreaView, View, TextInput, Text ,Alert} from "react-native";
import styles from "../styles/addStyles"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { BASE_URL } from '@env';

const AddScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('')

    const handleSubmit = () => {
        console.info('Submitting')
        try{
            const submitData = {
                name: name,
                quantity: quantity
            };
    
            fetch(`${BASE_URL}/items`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submitData)
            })
            .then((response) =>{
                if(response.ok){
                    Alert.alert('Success', 'Item Added!');
                    navigation.navigate('Menu')
                }
                else{
                    Alert.alert('Error', 'Invalid Request')
                }
            })
        }
        catch(error){
            console.error()
            Alert.alert('Error', 'Something went wrong')
        }
    }
    


    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Add Item</Text>
            </View>
            <View style={styles.formContainer}>
                <TextInput style={styles.TextInput}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(name) => setName(name)}/>
                <TextInput style={styles.TextInput}
                    placeholder="Quantity"
                    placeholderTextColor="#003f5c"
                    onChangeText={(quantity) => setQuantity(quantity)} keyboardType="numeric"/>
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitLabel}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default AddScreen;