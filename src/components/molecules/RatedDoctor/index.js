import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyDoctor1, IconStar} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={DummyDoctor1} style={styles.avatar} />
        <View>
          <Text style={styles.name}>Alexa Rachel</Text>
          <Text style={styles.job}>Pediatrician</Text>
        </View>
      </View>
      <View style={styles.stars}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    alignItems : 'center',
    marginBottom : 16,
    justifyContent : 'space-between'
  },
  profile : {
    flexDirection : 'row',
    alignItems : 'center'
  },  
  avatar : {
    width : 50,
    height : 50,
    borderRadius : 50/2,
    marginRight : 12
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
  },
  stars : {
    flexDirection : 'row'
  },
});
