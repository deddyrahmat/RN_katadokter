import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {getDatabase, ref, child, get} from 'firebase/database';
import {showMessage} from 'react-native-flash-message';

import {ILLogo} from '../../assets';

import fire from '../../config/fire';
import {colors, fonts, storeData, useForm} from '../../utils';

import {Buttons, Gap, Input, Link, Loading} from './../../components';

export default function Login({navigation}) {
  const [form, setForm] = useForm({email: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    // console.log('form', form);
    setIsLoading(true);
    const auth = getAuth(fire);
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then(response => {
        console.log('response', response);

        const dbRef = ref(getDatabase(fire));
        get(child(dbRef, `users/${response.user.uid}`))
          .then(resDBCheck => { 
            if(resDBCheck.val()) {
              console.log('resDBCheck', resDBCheck.val())
              storeData('user',resDBCheck.val());
              navigation.replace('MainApp')
            }
          })
        
      })
      .catch(err => {
        setIsLoading(false);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
    
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={10} />
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            secureTextEntry={true}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={10} />
          <Link title="Forgot My Password" size={12} />
          <Gap height={24} />
          <Buttons title="Sign In" onPress={() => login()} />
          <Gap height={30} />
          <Link
            title="Create New Account"
            size={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      {isLoading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    marginVertical: 40,
    maxWidth: 160,
  },
});
