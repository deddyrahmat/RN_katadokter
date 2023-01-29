import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { colors, fonts } from '../../utils';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      // replace = fungsi back tidak bisa digunakan dan auto close app
      navigation.replace('GetStarted')
    }, 3000);
  },[]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : "white",
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    title : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 20
    }
})