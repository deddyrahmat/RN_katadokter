import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ILCatUmum, ILCatObat, ILCatPsikiater } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function DoctorCategory({category, onPress}) {
  const Icon = () => {
    if(category === 'dokter umum'){
      return <ILCatUmum style={styles.illustration} />
    }
    if(category === 'psikiater'){
      return <ILCatPsikiater style={styles.illustration} />
    }
    if(category === 'dokter obat'){
      return <ILCatObat style={styles.illustration} />
    }
      return <ILCatUmum style={styles.illustration} />
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.text}>Saya Butuh</Text>
      <Text style={styles.text2}>{category}</Text>
    </TouchableOpacity>
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