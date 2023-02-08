import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Profile name="Budi Gunawan" desc="Dokter Anak" />
      <Gap height={10} />
      <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
      <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
      <ProfileItem label="No. STR" value="0000116622081996" />
      <Gap height={23} />
      <View style={styles.btnStart}>
        <Buttons title="Start Consultation" onPress={() => navigation.navigate("Chatting")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btnStart: {
    paddingHorizontal : 40
  }
});
