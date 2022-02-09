import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList, Modal, Alert } from 'react-native';


import { useState } from 'react';

import AddItem from './components/AddItem/AddItem';
import List from './components/List/List';

export default function App() {

  const importante = () => {
    setItemImportante(!itemImportante);
    // Alert.alert(` ${itemImportante} ` )
  }

  const [ textInput, setTextInput] = useState('');
  const [ telInput , setTelInput ] = useState('');
  const [ itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const [itemImportante, setItemImportante ] = useState(false)


  const handleConfirmDelete = () => {
    const {id } = itemSelected
    setItemList(itemList.filter(item => item.id !== id ))
    setModalVisible(false);
    setItemSelected({})
  }

  const handleOnDelete = (item) => {
    setModalVisible(true);
    setItemSelected(item)
  }

  const handleonPress= () => {
    setItemList([
      ...itemList,
      {
        value: textInput,
        phone: telInput,
        id: Math.random().toString(),
      },
    ])

    setTextInput('')
    setTelInput('')

  }

  const handleChangeText = (text) => {
    // Alert.alert(text.value)
    setTextInput(text) 

   }

   const handleTelInputText = (text) => {
    // Alert.alert(text.value)
    setTelInput(text) 

   }
  
  return (

                // ********  Input   ******
    
    <View 
        // onStartShouldSetResponder={importante}
        style={styles.container}
        >
        <AddItem 
        textInput={textInput}
        handleChangeText={handleChangeText}
        telInput={telInput}
        handleTelInputText={handleTelInputText}
        handleonPress={handleonPress}

        />
  
        
      {/* ***** Lista ***** */}

      <List
      itemList={itemList}
      handleOnDelete={handleOnDelete}
      // item={item}
      >
      </List>


        {/* Ventana Modal */}

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

      <StatusBar style="auto" />
    </View>
  );
}



            // ****  ESTILOS  ****

const styles = StyleSheet.create({
  // container: {
  //   // padding: 30,
  //   marginTop:40,
  //   marginBottom: 15,
  // },

  

  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },

  innerText: {
    color: 'red',
    fontWeight: 'bold'
  },

  bg1: {
    backgroundColor: 'white'
  },

  bg2: {
    backgroundColor: 'green'
  }
});
