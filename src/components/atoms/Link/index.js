import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

export default function Link({title, size, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(size, align)}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    title : (size, align) => (
        {
            color : colors.text.secondary,
            fontFamily : fonts.primary.normal,
            textDecorationLine : "underline",
            fontSize : size,
            textAlign : align
        }
    )
})