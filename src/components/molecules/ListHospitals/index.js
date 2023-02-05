import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { colors, fonts } from '../../../utils';

export default function ListHospitals({type,name,address, pic}) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperDoctor}>
        <Image source={pic} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.address}>{address}</Text>
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
