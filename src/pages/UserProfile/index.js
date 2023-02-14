import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Gap, Header, List, Profile} from '../../components';
import { colors, getData } from '../../utils';
import { ILNullPhoto } from '../../assets';



export default function UserProfile({navigation}) {
  const [profile, setProfile] = useState({
    fullname : '',
    profession : '',
    photo : ILNullPhoto
  });

  useEffect(() => {
    navigation.addListener('focus', () => {
      getUserData();
    });
    
  }, [navigation]);

  const getUserData = () => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri : res.photo};
      setProfile(data);
    });
  }

  // useEffect(() => {
  //   getData('user').then(res => {
  //     // console.log('res user', res)
  //     const data = res;
  //     data.photo = {uri : res.photo};
  //     setProfile(data);
  //   });
  // },[]);
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={10} />
      {
        profile.fullname.length > 0 && (
          <Profile name={profile.fullname} photo={profile.photo} desc={profile.profession}/>
        )
      }
      <Gap height={14} />
      <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate("UpdateProfile")} />
      <List name="Language" desc="Last Update Yesterday" type="next" icon="language" />
      <List name="Give Us Rate" desc="Last Update Yesterday" type="next" icon="rate" />
      <List name="Help Center" desc="Last Update Yesterday" type="next" icon="help" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  page : {
    backgroundColor : colors.white,
    flex : 1
  }
});
