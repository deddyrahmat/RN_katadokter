import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Gap from '../Gap'

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
        color : "#7D8797",
        fontSize : 16,
        fontFamily : "Nunito-Regular"
    },  
    input : {
        borderRadius : 10,
        borderColor : "#E9E9E9",
        borderWidth : 1,
        borderStyle : 'solid',
        padding : 12
    }
})