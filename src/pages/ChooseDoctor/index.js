import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, ListDoctor } from '../../components'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3, DummyDoctor4 } from '../../assets'

export default function ChooseDoctor() {
  return (
    <View>
      <Header title="Pilih Dokter Anak" type="dark" />
      <ListDoctor type="next" avatar={DummyDoctor1} desc="Wanita" name="Alex Snadiari" />
      <ListDoctor type="next" avatar={DummyDoctor2} desc="Wanita" name="Burhan" />
      <ListDoctor type="next" avatar={DummyDoctor3} desc="Wanita" name="Rudi" />
      <ListDoctor type="next" avatar={DummyDoctor4} desc="Wanita" name="Santa" />
    </View>
  )
}

const styles = StyleSheet.create({})