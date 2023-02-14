import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getAuth, onAuthStateChanged} from 'firebase/auth';

import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';

import fire from '../../config/fire';

export default function Splash({navigation}) {
  useEffect(() => {
    const unsubscribe = () => {
      const auth = getAuth(fire);
      onAuthStateChanged(auth, user => {
        // console.log('user', user)
        setTimeout(() => {
          if (user) {
            navigation.replace('MainApp');
          } else {
            // replace = fungsi back tidak bisa digunakan dan auto close app
            navigation.replace('GetStarted');
          }
        }, 3000);
      });
    };
    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
