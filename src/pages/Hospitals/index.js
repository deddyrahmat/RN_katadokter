import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import {getDatabase, ref, child, get} from 'firebase/database';
import React,{useEffect, useState} from 'react'
import fire from '../../config/fire';

import {ILHospitalBG} from '../../assets/illustration'
import { colors, fonts } from './../../utils';
import { ListHospitals } from '../../components';

export default function Hospitals() {
  const [itemHospitals, setItemHospitals] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase(fire));
    get(child(dbRef, `hospitals/`))
      .then(response => {
        if (response.exists() && response.val()) {
          setItemHospitals(response.val());
        } else {
          showError('No Data Available');
        }
      })
      .catch(error => {
        showError(error.message);
      });
  }, []);
  return (
    <View style={styles.page}>
    <ImageBackground source={ILHospitalBG} style={styles.background}>
      <Text style={styles.title}>Nearby Hospitals</Text>
      <Text style={styles.desc}>3 tersedia</Text>
    </ImageBackground>
    {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <View style={styles.content}>
      {
        itemHospitals.length > 0 && itemHospitals.map((hospital, index) => <ListHospitals key={`hospital-${index}`} name={hospital.title} address={hospital.address} pic={hospital.image} />)
      }
        
      </View>
    {/* </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
  page : {
    flex : 1,
    backgroundColor : colors.secondary,
  },  
  background : {
    height : 240
  },
  content : {
    borderRadius : 20,
    backgroundColor : colors.white,
    flex :1,
    marginTop : -30
  },  
  title : {
    fontSize : 20,
    fontFamily : fonts.primary[600],
    color : colors.white,
    textAlign : 'center',
    marginTop : 30,
    marginBottom : 6
  },
  desc : {
    textAlign : 'center',
    fontSize : 14,
    fontFamily : fonts.primary[300],
    color : colors.white
  }
})