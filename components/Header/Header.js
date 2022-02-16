import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
 
// import Colors from '../constants/Colors'

// import Colors from './Colors'

import Colors from '../../constants/colors'



function Header ({ title }) {
    return (
        <View style={ styles.header } >
            <Text style={ styles.headerTitle } > {title} </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    
    header: {
        width: '100%',
        height: 90,
        paddingTop: 5,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -40,
      },
      headerTitle: {
        // color: '#50514f',
        fontSize: 22,
        color: Colors.ButtonTextColor,
        fontFamily: 'Roboto-Bold'
      },

})

export default Header


