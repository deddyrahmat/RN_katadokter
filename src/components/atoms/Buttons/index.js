import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Buttons({title, type}) {
  return (
    <View style={styles.container(type)}>
      <Text style={styles.text(type)}>
        {title}
      </Text>
    </View>
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