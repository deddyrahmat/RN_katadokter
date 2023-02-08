import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Buttons, Gap, Header, Input, Profile} from '../../components';
import {colors} from '../../utils';

export default function UpdateProfile() {
  return (
    <View style={styles.page}>
      <Header title="Update Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Profile />
          <Gap height={26} />
          <Input label="Fullname" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Email" />
          <Gap height={24} />
          <Input label="Password" />
          <Gap height={40} />
          <Buttons title="Save Profile" />
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
    paddingTop : 0
  },
});
