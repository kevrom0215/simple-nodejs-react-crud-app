import { View, Text, SafeAreaView, TouchableOpacity, Image , Alert} from "react-native"
import styles from "../styles/deleteStyles"
import { useEffect,useState } from "react"
import { BASE_URL } from '@env';
import { ScrollView } from "react-native-gesture-handler";

const DeleteScreen = ({navigation}) =>{
    
    const [data, setData] = useState([]);

    const handleDelete = (itemName) =>{
        console.info('Deleting');
        try{
            const deleteData = {
                name: itemName,
            }

            fetch(`${BASE_URL}/items`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(deleteData)
            })
            .then((response) =>{
                if(response.ok){
                    Alert.alert('Success', `Item ${itemName} deleted!`);
                    console.log("Deleted")
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


    useEffect(()=>{
        //fetch JSON data
        fetch(`${BASE_URL}/items`)
        .then(response => response.json())
        .then(jsonData => {
            setData(jsonData);
        })
        .catch(error =>{
            console.error('Error fetching data: ',error);
        });
    }, []);


    return(
        <SafeAreaView style={styles.container}>
            <View style={[styles.listTitle , styles.shadowEffect]}>
                <View style={styles.itemLabelContainer}>
                    <Text style={styles.itemLabel}>Item List</Text>
                </View>
                <View style={styles.listLegend}>
                    <View style={styles.listLegendLabel}>
                    <Text style={styles.itemLabel}>Name</Text>
                    </View>
                    <View style={styles.listLegendLabel}>
                        <Text style={styles.itemLabel}>Quantity</Text>
                    </View>
                    <View style={[styles.listLegendLabel]}>
                        <Image style={[styles.trashIcon]} source={require('../assets/trash.png')}/>
                    </View>
                    
                </View>
            </View>
            <ScrollView style={[styles.listContainer, styles.shadowEffect]}>
                {data.map(item=>(
                    <View style={styles.item} key={item.id}>
                        <View style={styles.itemName}><Text style={styles.itemLabel}>{item.name}</Text></View>
                        <View style={styles.itemQuantity}><Text style={styles.itemLabel}>{item.quantity}</Text></View>
                        <TouchableOpacity onPress={()=>handleDelete(item.name)} style={styles.itemTrash}>
                            <Image style={styles.trashIcon} source={require('../assets/trash.png')}/>
                            </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.backContainer} onPress={()=>navigation.navigate('Menu')}>
                <Image style={styles.image} source={require('../assets/back.png')}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default DeleteScreen;