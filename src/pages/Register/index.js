import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Header} from '../../components'
import { colors } from '../../utils';
import {Buttons, Gap, Input} from './../../components';

export default function Register() {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" />
      <View style={styles.container}>
        <Input label="Fullname" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Buttons title="Continue" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  page : {
    backgroundColor : colors.white,
    flex : 1
  },
  container : {
    padding : 40,
    paddingTop : 0
  }
})