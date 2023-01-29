import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Buttons({title, type, onPress}) {
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
      backgroundColor : type === 'secondary' ? "#fff" : "#0BCAD4",
    }
  },
  text : (type) => ({
    fontFamily : "Nunito-SemiBold",
    color : type === "secondary" ? '#000' : "#fff",
    fontSize : 18,
    textAlign : 'center'
  })
})