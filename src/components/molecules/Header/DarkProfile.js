import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Buttons } from '../../atoms'
import { colors, fonts } from '../../../utils'
import { DummyDoctor9 } from '../../../assets'

export default function DarkProfile({onPress}) {
  return (
    <View style={styles.container}>
    <Buttons type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
      <Text style={styles.name}>Nairobi putri saja</Text>
      <Text style={styles.job}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor9} style={styles.avatar} />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.secondary,
        paddingVertical : 30,
        paddingLeft : 20,
        paddingRight : 16,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        flexDirection : 'row',
        alignItems : "center"
    },
    content : {
        flex : 1,
    },
    name : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.white,
        textAlign : 'center'
    },
    job : {
        fontSize : 14,
        textAlign : 'center',
        color : colors.text.subTitle,
        marginTop : 6
    },
    avatar : {
        width : 46,
        height : 46,
        borderRadius : 46/2
    }
})