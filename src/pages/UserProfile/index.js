import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getAuth, signOut} from 'firebase/auth';

import {Gap, Header, List, Profile} from '../../components';
import {colors, getData, showError} from '../../utils';
import {ILNullPhoto} from '../../assets';
import fire from '../../config/fire';

export default function UserProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullname: '',
    profession: '',
    photo: ILNullPhoto,
  });

  useEffect(() => {
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(data);
    });
  };

  const eventSignOut = () => {
    const auth = getAuth(fire);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // console.log('Success sign out');
        navigation.replace('GetStarted');
      })
      .catch(error => {
        // An error happened.
        showError(error.message);
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {profile.fullname.length > 0 && (
        <Profile
          name={profile.fullname}
          photo={profile.photo}
          desc={profile.profession}
        />
      )}
      <Gap height={14} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Sign Out"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
        onPress={eventSignOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
