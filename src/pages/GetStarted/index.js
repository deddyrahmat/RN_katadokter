import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted, ILLogo } from '../../assets'
import { colors, fonts } from '../../utils';
import {Buttons, Gap} from './../../components';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
      </View>
      <View>
        <Buttons title="Get Started" onPress={() => navigation.navigate("Register")} />
        <Gap height={16} />
        <Buttons type="secondary" title="Sign In" onPress={() => navigation.replace("Login")} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  page : {
    padding : 40,
    display : 'flex',
    justifyContent : 'space-between',
    flex : 1,
    backgroundColor : colors.white
  },
  title : {
    color : colors.white,
    fontSize : 28,
    marginTop : 91,
    fontFamily : fonts.primary[600]
  }
})