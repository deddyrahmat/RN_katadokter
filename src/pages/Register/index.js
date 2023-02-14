import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header, Loading} from '../../components';
import {colors, storeData, useForm} from '../../utils';
import {Buttons, Gap, Input} from './../../components';
import fire from '../../config/fire';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { getDatabase, ref, set } from "firebase/database";
import {showMessage} from 'react-native-flash-message';


export default function Register({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    // () => navigation.navigate('UploadPhoto')
    setIsLoading(true);
    const auth = getAuth(fire);
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        setForm('reset');
        const data = {
          fullname: form.fullname,
          profession: form.profession,
          email: form.email,
          uid : userCredential.user.uid
        };

        const db = getDatabase(fire);
        set(ref(db, 'users/' + userCredential.user.uid + '/'), data);
        setIsLoading(false);
        storeData('user',data);
        // console.log('user create', user);
        navigation.navigate('UploadPhoto', data);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
        console.log('errorMessage', errorMessage);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Fullname"
              value={form.fullname}
              onChangeText={value => setForm('fullname', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry={true}
            />
            <Gap height={40} />
            <Buttons title="Continue" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {isLoading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: colors.white,
    flex: 1,
  },
});
