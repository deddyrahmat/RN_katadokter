import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ChatItem, InputChat} from './../../components/';

export default function Chatting() {
  return (
    <View>
      <Text style={{color : 'red'}}>Chatting</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <InputChat />
    </View>
  )
}

const styles = StyleSheet.create({})