import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        // padding: 30,
        marginTop:40,
        marginBottom: 15,
      },

      titleContainer: {
        width: '100%',
        backgroundColor: colors.primary,
        marginTop: 45,
        padding: 9,
      },
    
      title: {
        fontSize: 25,
        // fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontFamily: colors.fontDef
      },

      inputContainer: {  
        marginBottom: 20,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10
      },
    
      input: {
        marginTop: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 25,
        color: 'black',
        fontFamily: colors.fontDef

      },
    })

    export default styles
