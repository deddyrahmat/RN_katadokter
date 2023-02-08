import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import { DummyUser } from '../../../assets';
import { colors, fonts } from '../../../utils';
export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.borderAvatar}>
        <Image source={DummyUser} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Shayna Melinda</Text>
      <Text style={styles.job}>Product Designer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    justifyContent : 'center',
    alignItems : 'center'
  },
  borderAvatar : {
    width : 130,
    height : 130,
    borderRadius : 130/2,
    borderWidth : 1,
    borderColor : colors.border,
    justifyContent : 'center',
    alignItems : 'center'
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name : {
    fontSize : 20,
    fontFamily : fonts.primary[600],
    color : colors.text.primary,
    marginTop : 16
  },
  job : {
    fontSize : 16,
    fontFamily : fonts.primary.normal,
    color : colors.text.secondary
  }
});
