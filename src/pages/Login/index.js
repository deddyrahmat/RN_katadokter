import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {ILLogo} from '../../assets'
import { colors, fonts } from '../../utils';
import {Buttons, Gap, Input, Link} from './../../components';

export default function Login() {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={24} />
      <Buttons title="Sign In" />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" />
    </View>
  )
}

const styles = StyleSheet.create({
  page : {
    padding : 40,
    backgroundColor : colors.white,
    flex : 1
  },
  title : {
    color : colors.text.primary,
    fontFamily : fonts.primary[600],
    fontSize : 20,
    marginVertical : 40,
    maxWidth : 160
  }
})