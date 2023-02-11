import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Header, Loading} from '../../components';
import {colors, useForm} from '../../utils';
import {Buttons, Gap, Input} from './../../components';
import fire from '../../config/fire';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

export default function Register({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    setIsLoading(true);
    console.log(form);
    // () => navigation.navigate('UploadPhoto')
    const auth = getAuth(fire);
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        setForm('reset')
        setIsLoading(false);
        console.log('user create', user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false);
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
