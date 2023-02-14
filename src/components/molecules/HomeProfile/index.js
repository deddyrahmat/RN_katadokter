import React, {useEffect, useState} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {DummyDoctor9, ILNullPhoto} from '../../../assets';
import { colors, fonts, getData } from './../../../utils';

export default function HomeProfile({onPress}) {
  const [profile, setProfile] = useState({
    photo : ILNullPhoto,
    fullname : '',
    profession : ''
  })

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri : res.photo},
      setProfile(data);
    }).catch((error) => console.log('error profile ', error));
  },[]);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapperPhoto}>
        <Image source={profile.photo} style={styles.photo} />
      </View>
      <View>
        <Text style={styles.name}>{profile.fullname}</Text>
        <Text style={styles.job}>{profile.profession}</Text>
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
    color : colors.text.primary,
    textTransform : 'capitalize'
  },
  job : {
    textTransform : 'capitalize',
    fontSize : 12,
    fontFamily : fonts.primary.normal,
    color : colors.text.secondary
  }
});
