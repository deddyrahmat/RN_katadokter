import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {fonts} from './../../../utils/fonts/index';
import {DummyDoctor9} from '../../../assets';

export default function Other() {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor9} style={styles.avatar} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight : 12
  },
  chatContent: {
    maxWidth:'80%',
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 16,
    backgroundColor: colors.primary,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
