import { BASE_URL } from '@env';
import styles from "../styles/editStyles"
import { View, Text, SafeAreaView, TouchableOpacity, Image , Alert, Modal} from "react-native"
import { useEffect,useState } from "react"
import { ScrollView, TextInput } from "react-native-gesture-handler";

const EditScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editedQuantity,setEditedQuantity] = useState('');

    const handleEdit = (item) =>{
        console.log("Editing")
        setModalVisible(true);
        try{
            setSelectedItem(item)
        }
        catch(e){
            Alert.alert('Error', `Something went wrong`)
        }
    }

    const closeModal = () => {
        setModalVisible(false)
    }
    
    const handleSubmit = () =>{
        console.log("Submit")
        try{
            const editData = {
                name: selectedItem.name,
                quantity: editedQuantity
            };
            fetch(`${BASE_URL}/items`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editData)
            })
            .then((response) =>{
                if(response.ok){
                    Alert.alert('Success', `Item ${selectedItem.name} with ${editedQuantity} edited!`);
                    console.log(`Edited item ${selectedItem.name} with ${editedQuantity}`)
                    navigation.navigate('Menu')
                }
                else{
                    Alert.alert('Error', 'Invalid Request')
                }
            })
        }
        catch(e){
            console.error(e)
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
                        <Image style={[styles.trashIcon]} source={require('../assets/edit.png')}/>
                    </View>
                    
                </View>
            </View>
            <ScrollView style={[styles.listContainer, styles.shadowEffect]}>
                {data.map(item=>(
                    <View style={styles.item} key={item.id}>
                        <View style={styles.itemName}><Text style={styles.itemLabel}>{item.name}</Text></View>
                        <View style={styles.itemQuantity}><Text style={styles.itemLabel}>{item.quantity}</Text></View>
                        <TouchableOpacity onPress={()=>handleEdit(item)} style={styles.itemTrash}>
                            <Image style={styles.trashIcon} source={require('../assets/edit.png')}/>
                            </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.backContainer} onPress={()=>navigation.navigate('Menu')}>
                <Image style={styles.image} source={require('../assets/back.png')}/>
            </TouchableOpacity>
            <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
                <View style={styles.modalTitle}>
                    <Text style={styles.modalTitleText}>Edit</Text>
                </View>
                <View style={styles.modalClose}>
                    <TouchableOpacity onPress={closeModal}>
                        <Text style={styles.closeButtonText}>x</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.modalBody}>
                <Text style={styles.modalText}>Item Name:</Text>
                
                <TextInput style={styles.TextInput} value={selectedItem ? selectedItem.name.toString() : ''}
                editable={false}/>
                
                <Text style={styles.modalText}>Item Quantity:</Text>
                
                <TextInput style={styles.TextInput} placeholder={selectedItem ? selectedItem.quantity.toString() : ''} 
                onChangeText={(quantity)=>setEditedQuantity(quantity)} keyboardType='numeric'/>
                
                
                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitLabel}>Submit</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
      </Modal>
        </SafeAreaView>
        
    );
    
}

export default EditScreen;