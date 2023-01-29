import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { colors } from '../../../utils'

export default function Input({label}) {
  return (
    <View>
        <Text style={styles.label}>{label}</Text>
        <Gap height={6} />
        <TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
    label : {
        color : colors.text.secondary,
        fontSize : 16,
        fontFamily : "Nunito-Regular"
    },  
    input : {
        borderRadius : 10,
        borderColor : colors.border,
        borderWidth : 1,
        borderStyle : 'solid',
        padding : 12
    }
})