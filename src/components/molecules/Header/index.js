import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets'
import { colors } from '../../../utils'
import { Gap } from '../../atoms'

export default function Header({title}) {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.title}>{title}</Text>
      {/* agar title header berada ditengah, sesuaikan ukuran width gap diakhir */}
      <Gap width={24} />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    paddingVertical : 30,
    paddingHorizontal : 16,
    alignItems : 'center',
    backgroundColor : colors.white
  },
  title : {
    flex : 1,
    color : colors.text.primary,
    fontFamily : "Nunito-SemiBold",
    fontSize : 20,
    textAlign : 'center',
  }
})