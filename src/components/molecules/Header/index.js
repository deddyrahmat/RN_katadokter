import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Buttons, Gap } from '../../atoms'
import DarkProfile from './DarkProfile'

export default function Header({title,type, onPress}) {

  if(type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />
  }
  return (
    <View style={styles.container(type)}>
      {/* <IconBackDark /> */}
      <Buttons type="icon-only" icon={type === 'dark' ? "back-light" : "back-dark"} onPress={onPress} />
      <Text style={styles.title(type)}>{title}</Text>
      {/* agar title header berada ditengah, sesuaikan ukuran width gap diakhir */}
      <Gap width={24} />
    </View>
  )
}

const styles = StyleSheet.create({
  container : (type) => (
    {
      flexDirection : 'row',
      paddingVertical : 30,
      paddingHorizontal : 16,
      alignItems : 'center',
      backgroundColor : type === 'dark' ? colors.secondary : colors.white,
      borderBottomLeftRadius : type === 'dark' ? 20 : 0,
      borderBottomRightRadius : type === 'dark' ? 20 : 0,
    }
  ),
  title : (type) => ({
    flex : 1,
    color : type === 'dark' ? colors.white : colors.text.primary,
    fontFamily : fonts.primary[600],
    fontSize : 20,
    textAlign : 'center',
  }) 
})