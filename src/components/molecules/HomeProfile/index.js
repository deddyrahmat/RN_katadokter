import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import {DummyDoctor9} from '../../../assets';
import { colors, fonts } from './../../../utils';

export default function HomeProfile({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapperPhoto}>
        <Image source={DummyDoctor9} style={styles.photo} />
      </View>
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.job}>Product Designer</Text>
      </View>
    </TouchableOpacity>
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
    borderRadius : 46/2
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
