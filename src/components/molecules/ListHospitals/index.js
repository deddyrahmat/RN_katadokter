import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyDoctor1, DummyHospital1} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ListHospitals() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperDoctor}>
        <Image source={DummyHospital1} style={styles.image} />
        <View>
          <Text style={styles.name}>Rumah Sakit Citra Bunga Merdeka</Text>
          <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    borderBottomWidth : 1,
    borderBottomColor : colors.border,
    marginVertical : 16
  },
  wrapperDoctor : {
    paddingHorizontal : 16,
    flexDirection : 'row',
    marginBottom : 16,
    alignItems : 'center'
  },  
  image: {
    width : 80,
    height : 60,
    borderRadius : 10,
    marginRight : 15,
  },
  name : {
    fontSize : 16,
    fontFamily : fonts.primary.normal,
    color : colors.text.primary,
    maxWidth : "88%"
  },
  address : {
    fontSize : 12,
    fontFamily : fonts.primary[300],
    color : colors.text.secondary,
  }
});
