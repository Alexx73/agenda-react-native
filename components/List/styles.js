import { StyleSheet } from "react-native";

import Colors from "../../constants/Colors";

const styles = StyleSheet.create({

  list: {
    height: '65%',
    backgroundColor: Colors.bg1
  },

  cap: {
    textTransform: 'capitalize',
    fontFamily: Colors.font2


  },

    item: {
        padding: 15,
        marginVertical: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: itemImportante ? 'red' : 'blue',
        // width: '80%',
        fontSize: 60,
        // fontWeight: 'bold' ,
        fontFamily: Colors.fontDef,
        backgroundColor: Colors.bg3

      },
      bg1: {
        backgroundColor: 'white'
      },
    
      bg2: {
        backgroundColor: 'green'
      }

    })

    export default styles