import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBackDark, IconBackLight } from '../../../assets'

export default function IconOnly({onPress, icon}) {
    const Icons = () => {
        if (icon === 'back-dark') {
            return <IconBackDark />
        }
        if (icon === 'back-light') {
            return <IconBackLight />
        }
        return <IconBackDark />
    }
  return (
    <TouchableOpacity onPress={onPress}>
      <Icons />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})