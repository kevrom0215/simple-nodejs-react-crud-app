import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native"
import styles from "../styles/listStyles"
import { useEffect,useState } from "react"
import { BASE_URL } from '@env';

const ListScreen = ({navigation}) =>{
    const [data, setData] = useState([]);

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
                    
                </View>
            </View>
            <View style={[styles.listContainer, styles.shadowEffect]}>
                {data.map(item=>(
                    <View style={styles.item} key={item.id}>
                        <View style={styles.itemName}><Text style={styles.itemLabel}>{item.name}</Text></View>
                        <View style={styles.itemQuantity}><Text style={styles.itemLabel}>{item.quantity}</Text></View>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.backContainer} onPress={()=>navigation.navigate('Menu')}>
                <Image style={styles.image} source={require('../assets/back.png')}/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ListScreen;