import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {fonts} from './../../../utils/fonts/index';

export default function IsMe() {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginBottom : 20,
        alignItems : 'flex-end',
        paddingRight : 16
      },
      chatContent : {
        maxWidth : "70%",
        paddingVertical : 12,
        paddingLeft : 12,
        paddingRight : 16,
        backgroundColor : colors.cardLight,
        borderBottomLeftRadius : 10,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
    
      },
      text : {
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        color : colors.text.primary
      },
      date: {
        fontSize : 11,
        fontFamily : fonts.primary.normal,
        color : colors.text.secondary,
        marginTop : 8,
        
      }
});
