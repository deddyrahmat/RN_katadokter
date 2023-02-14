import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {getDatabase, ref, update} from 'firebase/database';
import {showMessage} from 'react-native-flash-message';

import {Buttons, Gap, Header, Input, Profile} from '../../components';
import {colors, getData, storeData} from '../../utils';
import fire from '../../config/fire';
import {ILNullPhoto} from '../../assets';
import {onAuthStateChanged, getAuth, updatePassword} from 'firebase/auth';

export default function UpdateProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullname: '',
    profession: '',
    email: '',
  });

  const [password, setPassword] = useState('');
  const [photoForDb, setPhotoForDb] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);

  useEffect(() => {
    navigation.addListener('focus', () => {
      getUserData();
    });
    
  }, [navigation]);

  const getUserData = () => {
    getData('user').then(res => {
      // const data = res;
      setPhoto({uri: res.photo});
      setProfile(res);
    });
  }

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const updateProfile = () => {
    
    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Password kurang dari 6 karakter',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        // update pass
        updateDataPassword();        
        updateDataProfile()
        navigation.replace('MainApp');
      }
    }else{
      updateDataProfile()
      navigation.replace('MainApp');
    }
    // console.log('profile tes', profile)
  };

  const updateDataPassword = () => {
    const auth = getAuth(fire);
    onAuthStateChanged(auth, user => {
      if (user) {
        updatePassword(auth.currentUser, password).catch(err => {
          showMessage({
            message: err.message,
            type: 'default',
            backgroundColor: colors.error,
            color: colors.white,
          });
        });
      }
    });
  }

  const updateDataProfile = () => {
    const db = getDatabase(fire);
    const data = profile;
    if (photoForDb !== '') {
      data.photo = photoForDb;
    }

    update(ref(db, `users/${profile.uid}/`), data)
      .then(() => {
        console.log('update Success data', data)
        storeData('user', data);
        navigation.goBack('UserProfile');
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  const getImage = async () => {
    try {
      const result = await launchImageLibrary({
        includeBase64: true,
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      });
      // console.log('result', result)
      if (
        result.didCancel ||
        result.errorCode ||
        result.errorMessage ||
        result.error
      ) {
        showMessage({
          message: 'Silahkan tentukan foto',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        setPhotoForDb(
          `data:${result.assets[0].type};base64, ${result.assets[0].base64}`,
        );

        // console.log('result.assets[0].uri', result.assets)
        const source = {uri: result.assets[0].uri};
        setPhoto(source);
      }
    } catch (error) {
      showMessage({
        message: error,
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white,
      });
    }
  };

  return (
    <View style={styles.page}>
      <Header title="Update Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Profile isRemove onPress={getImage} photo={photo} />
          <Gap height={26} />
          <Input
            label="Fullname"
            value={profile.fullname}
            onChangeText={value => changeText('fullname', value)}
          />
          <Gap height={24} />
          <Input
            label="Pekerjaan"
            value={profile.profession}
            onChangeText={value => changeText('profession', value)}
          />
          <Gap height={24} />
          <Input label="Email" value={profile.email} disabled />
          <Gap height={24} />
          <Input
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={value => setPassword(value)}
          />
          <Gap height={40} />
          <Buttons title="Save Profile" onPress={() => updateProfile()} />
        </View>
      </ScrollView>
    </View>
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
  },
});
