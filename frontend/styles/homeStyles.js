
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#82B8D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer:{
    backgroundColor: '#ffffff',
    padding: "20%",
    margin: "5%",
    width: "70%",
    alignItems: "center"
  },
  button: {
    backgroundColor: '#ffffff',
    padding: "5%",
    margin: "5%",
    width: "70%",
    alignItems: "center"
  },
  text:{
    color: "#FFFFFF"
  },
  disabledButton: {
    // Styles specific to disabled button
    opacity: 0.5,
  }
});
  

  export default styles;