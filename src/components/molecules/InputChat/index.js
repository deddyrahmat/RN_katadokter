import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { Buttons } from '../../atoms'

export default function InputChat() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairoby" />
      <Buttons type="btn-icon-send"  />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    padding : 16,
    flexDirection : 'row',
    alignItems : 'center'
  },
  input : {
    backgroundColor : colors.disabled,
    padding : 14,
    borderRadius : 10,
    flex : 1,
    marginRight : 10,
    fontSize : 14,
    fontFamily : fonts.primary.normal,
    maxHeight : 45
  }
})