
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#82B8D9',
        alignItems: 'center',
        justifyContent: 'center',
      },
      formContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        backgroundColor: "#D94E8F",
        borderRadius: 10,
        flex: 1
      },
      TextInput: {
        height: "10%",
        paddingLeft: 20,
        width: "70%",
        margin: "5%",
        backgroundColor: "#F2F2F2",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
      },
      submitButton:{
        backgroundColor: "#272F59",
        margin: "5%",
        padding: "5%",
        borderRadius: 5,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
      },
      submitLabel:{
        color: "#FFFFFF",
        width: "100%"
      },
      titleContainer:{
        flex: 0.25,
        justifyContent: "center"
      },
      title: {
        fontSize: 20
      }
})

export default styles;