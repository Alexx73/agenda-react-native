import React from 'react'

import { StyleSheet, Modal, View, Text, Button } from 'react-native'

import styles from './styles'

function Modal2 ({ modalVisible, handleConfirmDelete, itemSelected })  {
    return (
        <Modal 
          animationType='slide'
          visible={modalVisible}>
         <View style={styles.modalBackGround} >
           <View style={styles.modalContainer} >
             <View  >

             <Text>
               Seguro desea eliminar  
               <Text style={styles.innerText} > {itemSelected.value}</Text> ?
             </Text>
             {/* <Text>{itemSelected.value}</Text> */}
             <View  >

             <Button          
             onPress={handleConfirmDelete} 
             title='Confirmar'  />
              </View>
             </View>
           </View>         
         </View>
        </Modal> 
    )
}



export default Modal2
