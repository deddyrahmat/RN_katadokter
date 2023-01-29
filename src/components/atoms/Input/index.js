import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'
import { colors, fonts } from '../../../utils'

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
        fontFamily : fonts.primary.normal
    },  
    input : {
        borderRadius : 10,
        borderColor : colors.border,
        borderWidth : 1,
        borderStyle : 'solid',
        padding : 12
    }
})