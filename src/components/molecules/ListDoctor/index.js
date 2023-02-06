import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IconNext } from '../../../assets';

import { colors, fonts } from '../../../utils';

export default function ListDoctor({avatar, name, desc, type, onPress}) {
  
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapperDoctor}>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.chat}>{desc}</Text>
        </View>
        {type === 'next' && <IconNext />}
      </View>
    </TouchableOpacity>
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
  content : {
    flex : 1
  },  
  avatar: {
    width : 46,
    height : 46,
    borderRadius : 46/2,
    marginRight : 12,
  },
  name : {
    fontSize : 16,
    fontFamily : fonts.primary.normal,
    color : colors.text.primary,
  },
  chat : {
    fontSize : 12,
    fontFamily : fonts.primary[300],
    color : colors.text.secondary,
  }
});
