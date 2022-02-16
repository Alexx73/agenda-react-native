import { StatusBar } from 'expo-status-bar';
import { StyleSheet,   View, Alert } from 'react-native';


import { useState } from 'react';

import AddItem from './components/AddItem/AddItem';
import List from './components/List/List';
import Modal2 from './components/Modal/Modal';

export default function App() {

  const importante = () => {
    setItemImportante(!itemImportante);
    // alert(` ${itemImportante} ` )
    
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

    // ******  Validacion de entrade de texto ******
    setTextInput(text.replace(/[^a-z & A-Z]/g, '')) 


   }

   const handleTelInputText = (text) => {

        // ******  Validacion  numerica ******
    setTelInput(text.replace(/[^0-9]/g, '')) 

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

        <Modal2 
        modalVisible={modalVisible}
        handleConfirmDelete={handleConfirmDelete}
        itemSelected={itemSelected}

        >

        </Modal2>

       
      <StatusBar style="auto" />
    </View>
  );
}



            // ****  ESTILOS  ****

const styles = StyleSheet.create({
  container: {
    // padding: 30,
    marginTop:40,
    marginBottom: 15,
  },


  bg1: {
    backgroundColor: 'white'
  },

  bg2: {
    backgroundColor: 'green'
  }
});
