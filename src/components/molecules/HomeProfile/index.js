import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILNullPhoto} from '../../../assets';
import { colors, fonts } from './../../../utils';

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperPhoto}>
        <Image source={ILNullPhoto} style={styles.photo} />
      </View>
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.job}>Product Designer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : colors.white,
    flexDirection : 'row',
    alignItems : 'center'
  },
  wrapperPhoto : {
    marginRight : 12
  },
  photo : {
    width : 46,
    height : 46,
  },
  name : {
    fontSize : 16,
    fontFamily : fonts.primary[600],
    color : colors.text.primary
  },
  job : {
    fontSize : 12,
    fontFamily : fonts.primary.normal,
    color : colors.text.secondary
  }
});
