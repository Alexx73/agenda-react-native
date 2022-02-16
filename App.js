import { StatusBar } from 'expo-status-bar';
import { StyleSheet,   View,  Text, Button } from 'react-native';
import { useState } from 'react';

import AddItem from './components/AddItem/AddItem';
import List from './components/List/List';
import Modal2 from './components/Modal/Modal';
import Header from './components/Header/Header'

import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import colors from './constants/colors';
import { FontAwesome5 } from '@expo/vector-icons';

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

   const [mostrarContactos, setMostrarContactos] = useState(false)
   const [numContactos, setNumContactos] = useState(0)

  const [ loaded ] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  })

  if (!loaded) return <AppLoading />

  const handleAregarContacto = () => {
    setMostrarContactos(true)
  }

  const handleCancelarContacto = () => {
    setMostrarContactos(false)
    console.log('cancelar contacto presionado')
  }


  const handleConfirmDelete = () => {
    const {id } = itemSelected
    setItemList(itemList.filter(item => item.id !== id ))
    setModalVisible(false);
    setItemSelected({})
  }

  const handleOnDelete = (item) => {
    setModalVisible(true);
    setItemSelected(item)
    setNumContactos(numContactos-1)
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

    setMostrarContactos(false)
    setNumContactos(numContactos+1)

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

   let content = <View  >
                              <Text style={styles.lista } >Lista de Contactos</Text>

                    { numContactos == 0 ?(
                      <View>
                        <Text style={{    textAlign: 'center', marginTop:5, padding:5, fontFamily: colors.fontDef, fontSize:16}}>No hay Contactos para mostrar    </Text>
                        
                        <FontAwesome5  name="sad-cry" size={34} color="red" style={{ textAlign: 'center', padding: 5}} />

                                               
                      </View>

                    ) : null }

                  <List
                              itemList={itemList}
                              handleOnDelete={handleOnDelete}>
                              numContactos={numContactos}

                  </List>

                  <View style={ styles.inputContainer} >
                      <Button onPress={handleAregarContacto } 
                          title='Agregar Contacto' 
                          color={ colors.primary }/>
                  </View>

                  
                </View>
   

   

  if (mostrarContactos) {
    content = <AddItem 
              textInput={textInput}
              handleChangeText={handleChangeText}
              telInput={telInput}
              handleTelInputText={handleTelInputText}
              handleonPress={handleonPress}
              handleCancelarContacto={handleCancelarContacto}
              />
  }

  return (
          
    
    <View 
        
        // onStartShouldSetResponder={importante}
        style={styles.container}
        >
            {/* ********  Header  ******** */}

            <Header title="Mi Agenda Digital" />
            { content }

            {/* <Button onPress={handleAregarContacto } 
            title='Agregar Contacto' 
            color={ colors.primary }/> */}
          


              {/* // ********  Input   ****** */}
        {/* <AddItem 
        textInput={textInput}
        handleChangeText={handleChangeText}
        telInput={telInput}
        handleTelInputText={handleTelInputText}
        handleonPress={handleonPress}

        /> */}
        {/* <Text>funciona</Text> */}
  
        
      {/* ***** Lista ***** */}
      {/* // item={item} */}

      {/* <List
      itemList={itemList}
      handleOnDelete={handleOnDelete}
      >
      </List> */}


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
    fontFamily: 'Roboto-Bold',
    flex:1,
    backgroundColor: colors.bg1

    
  },

  lista: {
    backgroundColor: colors.bg1 ,
    padding: 8,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    fontSize:20,
  },

  inputContainer: {  
    marginTop: 20,
    marginBottom: 15,
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  bg1: {
    backgroundColor: 'white'
  },

  bg2: {
    backgroundColor: 'green'
  }
});
