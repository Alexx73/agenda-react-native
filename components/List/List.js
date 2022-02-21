import React from 'react'
import { View, FlatList, Text } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
import Colors from '../../constants/Colors';


function List ({ itemList, item, handleOnDelete, numContactos  }) {
    return (

        <View> 

        <FlatList style={ styles.list}
        data={itemList}
        renderItem={({ item }) => (
  
          <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', 
          }} >
            <View style={styles.item}  >
                
            <MaterialIcons name="person-outline" size={25} color="blue" />
              <Text style={ styles.cap } >{ item.value }  </Text>
              { console.log(numContactos) }
  
              <MaterialIcons name="phone" size={25} color="green" ></MaterialIcons>
              <Text style={ styles.cap }  > {item.phone} </Text>
              {/* <Button onPress={ () => handleOnDelete(item)} title='X' /> */}
              <MaterialIcons 
              onPress={ () => handleOnDelete(item)}
              name="delete" size={32} color="red" />
  
              {/* <Text style={ (itemImportante) ? styles.bg1 : styles.bg2} >Nombre:{ item.value } </Text> */}
  
            </View>
          </View>
        ) }
     
      keyExtractor={item => item.id}
        />  

      </View>
    )
}

export default List
