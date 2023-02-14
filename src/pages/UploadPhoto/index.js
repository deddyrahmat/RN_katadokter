import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { launchImageLibrary} from 'react-native-image-picker';
import fire from '../../config/fire';
import { getDatabase, ref, update } from "firebase/database";

import {Buttons, Gap, Header, Link} from '../../components';
import {colors, fonts, getData, showError, storeData} from '../../utils';
import {IconAddPhoto, IconRemovePhoto, ILNullPhoto} from '../../assets';

export default function UploadPhoto({navigation, route}) {
  const {fullname,profession, uid} = route.params;

  const [photoForDb, setPhotoForDb] = useState('');
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [hasPhoto, setHasPhoto] = useState(false);

  // console.log('getData', getData('user'))
  const getImage = async () => {
    try {
      const result = await launchImageLibrary({includeBase64 : true, quality: 0.5, maxWidth: 200, maxHeight: 200});
      // console.log('result', result)
      if (result.didCancel || result.errorCode || result.errorMessage || result.error) {
        showError("Silahkan tentukan foto");
      }else{
        setPhotoForDb(`data:${result.assets[0].type};base64, ${result.assets[0].base64}`);
        
        // console.log('result.assets[0].uri', result.assets)
        const source = {uri : result.assets[0].uri}
        setPhoto(source)
        setHasPhoto(true)
      }
    } catch (error) {
      showError(error.message);
    }
  }

  const uploadAndContinue = () => {
    const db = getDatabase(fire);
    update(ref(db, 'users/' + uid + '/'), {photo : photoForDb});
    const data = route.params;
    data.photo = photoForDb;
    storeData('user', data);
    navigation.replace("MainApp")
  }

  // console.log('hasPhoto', hasPhoto)
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.wrapperPhoto} onPress={() => getImage()}>
            <Image source={photo} style={styles.photo} />
            {hasPhoto ? <IconRemovePhoto style={styles.iconAdd} /> : <IconAddPhoto style={styles.iconAdd} />}
          </TouchableOpacity>
          <Text style={styles.fullname}>{fullname}</Text>
          <Text style={styles.job}>{profession}</Text>
        </View>
        <View>
          <Buttons title="Upload and Continue" disable={!hasPhoto} type="primary" onPress={() => uploadAndContinue()} />
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
    borderRadius : 110/2
  },
  iconAdd: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
});
