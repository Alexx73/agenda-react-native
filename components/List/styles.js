import { StyleSheet } from "react-native";

import colors from "../../constants/colors";

const styles = StyleSheet.create({

  list: {
    height: '65%'
  },

  cap: {
    textTransform: 'capitalize',
    fontFamily: colors.font2


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
        fontSize: 60,
        // fontWeight: 'bold' ,
        fontFamily: colors.fontDef


      },
      bg1: {
        backgroundColor: 'white'
      },
    
      bg2: {
        backgroundColor: 'green'
      }

    })

    export default styles