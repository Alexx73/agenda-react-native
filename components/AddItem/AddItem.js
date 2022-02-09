import React from 'react'
import { TextInput, Text, Button, View } from 'react-native'

import styles from './styles'

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



export default AddItem
