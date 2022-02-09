import React from 'react'
import { TextInput, Text, Button, StyleSheet, View } from 'react-native'

function AddItem ({ textInput, handleChangeText, telInput, handleTelInputText, handleonPress })  {
    return (
        <View  >
            <View style={ styles.titleContainer } >

            <Text style={ styles.title } >
            Mi Agenda
            </Text>
            </View>

            <View style={ styles.inputContainer}>   
            <TextInput 
            maxLength={32}
            placeholder='Nombre'
            style={ styles.input} 
            value={textInput}
            onChangeText={handleChangeText}
            />

            <TextInput 
            maxLength={10}
            placeholder='Telefono'
            style={ styles.input}
            value={telInput}
            onChangeText={handleTelInputText}
             />

            <Button onPress={handleonPress} 
            title='Agregar Contacto' 
            color="#ff751a" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // padding: 30,
        marginTop:40,
        marginBottom: 15,
      },

      titleContainer: {
        width: '100%',
        backgroundColor: '#ff751a',
        marginTop: 8,
        padding: 9,
      },
    
      title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        padding: 10,
      },

      inputContainer: {  
        marginBottom: 15,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
    
      input: {
        marginTop: 30,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 8,
        color: 'black'
      }

})


export default AddItem
