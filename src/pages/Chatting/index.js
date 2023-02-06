import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat} from './../../components/';
import {colors, fonts} from '../../utils';

export default function Chatting() {
  return (
    <View style={styles.page}>
      <Header type="dark-profile" title="Nairobi Putri Saja" />
      <View style={styles.content}>
        <Text style={styles.chatDate}>20/02/2023</Text>
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  page : {
    flex : 1,
    backgroundColor : colors.white
  },
  content : {
    flex :1
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
    // backgroundColor : colors.white
  },
});
