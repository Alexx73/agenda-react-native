import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';


function List ({ itemList, item, handleOnDelete   }) {
    return (
        <FlatList
        data={itemList}
        renderItem={({ item }) => (
  
          <View style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto'
          }} >
            <View style={styles.item}  >
  
            <MaterialIcons name="person-outline" size={25} color="blue" />
              <Text  >{ item.value } </Text>
  
              <MaterialIcons name="phone" size={25} color="green" ></MaterialIcons>
              <Text> {item.phone} </Text>
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
    )
}




export default List
