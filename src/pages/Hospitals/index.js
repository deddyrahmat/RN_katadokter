import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ILHospitalBG} from '../../assets/illustration'
import { colors, fonts } from './../../utils';
import { ListHospitals } from '../../components';
import { DummyHospital1, DummyHospital2, DummyHospital3 } from '../../assets';

export default function Hospitals() {
  return (
    <View style={styles.page}>
    <ImageBackground source={ILHospitalBG} style={styles.background}>
      <Text style={styles.title}>Nearby Hospitals</Text>
      <Text style={styles.desc}>3 tersedia</Text>
    </ImageBackground>
    {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.content}>
        <ListHospitals name="Rumah Sakit Citra Bunga Merdeka" address="Jln. Surya Sejahtera 20" pic={DummyHospital1} />
        <ListHospitals name="Rumah Sakit Anak Happy Family & Kids" address="Jln. Surya Sejahtera 20" pic={DummyHospital2} />
        <ListHospitals name="Rumah Sakit Jiwa Tingkatan Paling Atas" address="Jln. Surya Sejahtera 20" pic={DummyHospital3} />
      </View>
    {/* </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  page : {
    flex : 1,
    backgroundColor : colors.secondary,
  },  
  background : {
    height : 240
  },
  content : {
    borderRadius : 20,
    backgroundColor : colors.white,
    flex :1,
    marginTop : -30
  },  
  title : {
    fontSize : 20,
    fontFamily : fonts.primary[600],
    color : colors.white,
    textAlign : 'center',
    marginTop : 30,
    marginBottom : 6
  },
  desc : {
    textAlign : 'center',
    fontSize : 14,
    fontFamily : fonts.primary[300],
    color : colors.white
  }
})