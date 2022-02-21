import React from 'react'
import { TextInput, Text, Button, View } from 'react-native'

import styles from './styles'
import Colors from '../../constants/Colors'

function AddItem ({ textInput, handleChangeText, telInput, handleTelInputText, handleonPress, handleCancelarContacto })  {
    return (
        <View  >
            {/* <View style={ styles.titleContainer } >

                <Text style={ styles.title } >
                Mi Agenda 
                </Text>
            </View> */}

            <View style={ styles.inputContainer}>   
            <TextInput 
            maxLength={32}
            placeholder='Nombre'
            style={ styles.input} 
            value={textInput}
            onChangeText={handleChangeText}
            autoCapitalize="characters"
            />

            <TextInput 
            maxLength={10}
            placeholder='Telefono'
            style={ styles.input}
            value={telInput}
            onChangeText={handleTelInputText}
            keyboardType="phone-pad"
            
             />
            <View style={{ marginBottom:15 }} > 
                <Button onPress={handleonPress} 
                title='Agregar' 
                color={ Colors.primary }/> 
            </View>
            
            

            <Button onPress={handleCancelarContacto} 
            title='Cancelar' 
            color={ Colors.accent }/>
            </View>
        </View>
    )
}



export default AddItem
