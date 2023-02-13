import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import IconOnly from './IconOnly'
import BtnIconSend from './BtnIconSend'

export default function Buttons({title, type, onPress, icon, disable}) {
  if(type === 'btn-icon-send'){
    return <BtnIconSend disable={disable} />
  }
  if (type === 'icon-only') {
    return (
        <IconOnly icon={icon} onPress={onPress} />
    )
  }

  if(disable) {
    return (
      <View style={styles.disabledBg} >
        <Text style={styles.disabledText}>
          {title}
        </Text>
      </View>
    )

  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container : (type) => {
    return {
      borderRadius : 10,
      paddingVertical : 10,
      backgroundColor : type === 'secondary' ? colors.white : colors.primary,
    }
  },
  text : (type) => ({
    fontFamily : fonts.primary[600],
    color : type === "secondary" ? '#000' : colors.white,
    fontSize : 18,
    textAlign : 'center'
  }),
  disabledBg : {
    paddingVertical : 10,
    borderRadius : 10,
    backgroundColor : colors.button.disabled.background
  },
  disabledText : {
    fontSize : 18,
    fontFamily : fonts.primary[600],
    textAlign : 'center',
    color : colors.button.disabled.text
  }
})