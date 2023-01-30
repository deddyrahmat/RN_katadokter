import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyDoctor1} from '../../../assets';
import { colors, fonts } from '../../../utils';

export default function ListDoctor() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperDoctor}>
        <Image source={DummyDoctor1} style={styles.avatar} />
        <View>
          <Text style={styles.name}>Alexander Jannie</Text>
          <Text style={styles.chat}>Baik ibu, terima kasih banyak atas wakt...</Text>
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
