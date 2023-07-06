
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoStyle: {
      height: "50%",
      marginTop: "20%",
      resizeMode: "contain"
    },
    iconContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    formContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      width: "100%",
      backgroundColor: "#91C4D9"
    },
    TextInput: {
      height: "15%",
      paddingLeft: 20,
      width: "70%",
      margin: 10,
      backgroundColor: "#F2F2F2",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5
    },
    loginButton:{
      backgroundColor: "#272F59",
      margin: "5%",
      padding: "5%",
      borderRadius: 5,
      width: "70%",
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  

  export default styles;