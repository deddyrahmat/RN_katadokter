import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';
import {IconAddPhoto, ILNullPhoto} from '../../assets';

export default function UploadPhoto({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.wrapperPhoto}>
            <Image source={ILNullPhoto} style={styles.photo} />
            <IconAddPhoto style={styles.iconAdd} />
          </View>
          <Text style={styles.fullname}>Shayna Melinda</Text>
          <Text style={styles.job}>Product Designer</Text>
        </View>
        <View>
          <Buttons title="Upload and Continue" type="primary" onPress={() => navigation.replace("MainApp")} />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} onPress={() => navigation.replace("MainApp")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.white,
    justifyContent : 'space-between'
  },
  profile : {
    backgroundColor : colors.white,
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  job: {
    color: colors.text.secondary,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.primary.normal,
  },
  fullname: {
    color: colors.text.secondary,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.primary[600],
  },
  wrapperPhoto: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    width: 130,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 26,
  },
  photo: {
    position: 'relative',
    width: 110,
    height: 110,
  },
  iconAdd: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
});
