import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILCatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function DoctorCategory() {
  return (
    <View style={styles.container}>
      <ILCatUmum />
      <Text style={styles.text}>Saya Butuh</Text>
      <Text style={styles.text2}>Dokter Umum</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    padding : 12,
    backgroundColor : colors.cardLight,
    alignSelf : 'flex-start',
    borderRadius : 10,
    marginRight : 10,
    height : 130,
    width : 110
  },
  text : {
    fontSize : 12,
    fontFamily : fonts.primary[300],
    color : colors.text.primary,
    marginTop : 28
  },
  text2 : {
    fontSize : 12,
    fontFamily : fonts.primary[600],
    color : colors.text.primary
  }
})