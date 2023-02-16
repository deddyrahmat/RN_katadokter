import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { IconStar} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function RatedDoctor({onPress, avatar, name, desc}) {
  console.log('name', name)
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.profile}>
        <Image source={avatar} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.job}>{desc}</Text>
        </View>
      </View>
      <View style={styles.stars}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container : {
    flexDirection : 'row',
    alignItems : 'center',
    marginBottom : 16,
    justifyContent : 'space-between',
    alignItems : 'center'
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
    color : colors.text.primary,
    textTransform : 'capitalize'
  },
  job : {
    textTransform : 'capitalize',
    fontSize : 12,
    fontFamily : fonts.primary.normal,
    color : colors.text.secondary
  },
  stars : {
    flexDirection : 'row'
  },
});
