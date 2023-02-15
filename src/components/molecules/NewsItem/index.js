import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DummyNews1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function NewsItem({title,date, image}) {
  // console.log(data)
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{uri:image}} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    borderBottomColor :colors.border,
    borderBottomWidth : 1,
    paddingBottom : 12,
    paddingTop : 16,
    paddingHorizontal : 16
  },
  text : {
    flex :1
  },
  title : {
    fontSize : 16,
    fontFamily : fonts.primary[600],
    color : colors.text.primary,
    maxWidth : '90%'
  },
  date : {
    fontSize : 12,
    fontFamily : fonts.primary.normal,
    color : colors.text.secondary
  }, 
  image : {
    width : 80,
    height : 60,
    borderRadius : 20,
  }
})