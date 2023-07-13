
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#82B8D9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    listContainer: {
      backgroundColor: "white",
      width: "90%",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderWidth: 5,
      overflow: "hidden"
    },
    item:{
      backgroundColor: "#272F59",
      flexDirection: "row",
      marginTop: "2%",
      paddingBottom: "2%",
      marginLeft: "5%",
      marginRight: "5%",
      borderRadius: 5
    },
    itemName:{
      flex: 2,
      alignItems: "center",
      padding: "5%"
    },
    itemQuantity:{
      flex: 2,
      alignItems: "center",
      padding: "5%"
    },
    itemLabel: {
      color: "#F2F2F2",
    },
    listTitle:{
      height: "10%",
      alignItems: "center",
      marginTop: "5%",
      backgroundColor: "#D94E8F",
      alignItems: "center",
      justifyContent: "center",
      width: "90%",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderWidth: 5,
    },
    shadowEffect:{
      shadowOpacity: 0.5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      elevation: 5,
      shadowRadius: 3.84
    },
    listLegend:{
      flexDirection: "row",
      width: "100%",
      height: "60%",
      backgroundColor: "#272F59"
    },
    listLegendLabel:{
      justifyContent: "center",
      alignItems: "center",
      flex:1, 
      borderTopWidth: 2,
    },
    itemLabelContainer:{
      justifyContent: "center",
      alignItems: "center",
      flex:1,
      
    },
    backContainer:{
      margin: "5%",
      backgroundColor: "#000000",
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      height: "5%",
      borderRadius: 5,
    },
    image: {
      resizeMode: "contain",
      borderRadius: 5,
      width: "100%",
      flex: 1
    },
    itemTrash:{
        flex:1,
        padding: "5%",
    },
    trashIcon:{
        resizeMode: "contain",
        borderRadius: 5,
        width: "100%",
        flex: 1,
        justifyContent: "center",
    }

  });
  

  export default styles;