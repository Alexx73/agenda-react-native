import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  list: {
    height: '65%'
  },

  cap: {
    textTransform: 'capitalize'

  },

    item: {
        padding: 15,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: itemImportante ? 'red' : 'blue',
        // width: '80%',
        fontSize: 50,
        fontWeight: 'bold' ,
      },
      bg1: {
        backgroundColor: 'white'
      },
    
      bg2: {
        backgroundColor: 'green'
      }

    })

    export default styles