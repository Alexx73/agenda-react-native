import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList, Modal, Alert } from 'react-native';


import { MaterialIcons } from '@expo/vector-icons';

import { useState } from 'react';

import AddItem from './components/AddItem';

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


        {/* <View style={ styles.titleContainer } >

          <Text style={ styles.title } >
            Mi Agenda
          </Text>
        </View>

      
      <View style={ styles.inputContainer}>   
        <TextInput 
        maxLength={32}
        placeholder='Nombre'
        onChangeText={handleChangeText}
        value={textInput}
        style={ styles.input} />

        <TextInput 
        maxLength={10}
        placeholder='Telefono'
        onChangeText={handleTelInputText}
        value={telInput}
        style={ styles.input} />

        <Button onPress={handleonPress} 
        title='Agregar Contacto' 
        color="#ff751a" />
      </View> */}



      {/* ***** Lista ***** */}

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
      )                
      }
   
    keyExtractor={item => item.id}
      />  


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
    fontWeight: 'bold'
    
  },

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
