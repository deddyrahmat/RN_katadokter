import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ListDoctor} from './../../components';
import { colors, fonts } from '../../utils';

export default function Messages() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page : {
    flex : 1,
    backgroundColor : colors.secondary
  },
  container : {
    flex : 1,
    backgroundColor : colors.white,
    borderBottomLeftRadius : 20,
    borderBottomRightRadius : 20
  },
  title : {
    fontSize : 20,
    fontFamily : fonts.primary[600],
    color : colors.text.primary,
    marginTop : 30,
    marginLeft : 16
  }
})