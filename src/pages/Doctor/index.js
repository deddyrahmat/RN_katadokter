import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  getDatabase,
  ref,
  child,
  query,
  get,
  orderByChild,
  limitToLast,
} from 'firebase/database';

import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts, showError} from '../../utils';
import {
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
  JSONCategoryDoctor,
} from '../../assets';
import fire from '../../config/fire';

export default function Doctor({navigation}) {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const getNews = () => {
    const dbRef = ref(getDatabase(fire));
    get(child(dbRef, `news/`))
      .then(response => {
        if (response.exists() && response.val()) {
          setNews(response.val());
        } else {
          showError('No Data Available');
        }
      })
      .catch(error => {
        showError(error.message);
      });
  };

  console.log('doctors', doctors);
  const getTopRatedDoctor = () => {
    const dbRef = ref(getDatabase(fire), `doctors/`);
    const topRated = query(dbRef, orderByChild('rate'), limitToLast(3));
    get(topRated)
      .then(response => {
        if (response.exists() && response.val()) {
          const data = [];
          const result = response.val();
          Object.keys(result).map(key => {
            data.push({
              id : key,
              data : result[key]
            })
          });
          setDoctors(data);
        } else {
          showError('No Data Available');
        }
      })
      .catch(error => {
        showError(error.message);
      });
  };

  const getCategories = () => {
    const dbRef = ref(getDatabase(fire));
    get(child(dbRef, `category_doctor/`))
      .then(response => {
        if (response.exists() && response.val()) {
          setCategories(response.val());
        } else {
          showError('No Data Available');
        }
      })
      .catch(error => {
        showError(error.message);
      });
  };
  useEffect(() => {
    getNews();
    getCategories();
    getTopRatedDoctor();
  }, []);
  // console.log('news', news)
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {categories.length > 0 &&
                  categories.map(cat => (
                    <DoctorCategory
                      category={cat.category}
                      key={`list-category-${cat.id}`}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                    />
                  ))}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
            {doctors.length > 0 && (
              doctors.map(doctor => (
                <RatedDoctor
                  key={doctor.id}
                  name={doctor.data.fullName}
                  desc={doctor.data.profession}
                  avatar={{uri: doctor.data.photo}}
                  onPress={() => navigation.navigate('DoctorProfile')}
                />
              ))
            )}

            <Text style={styles.sectionLabel}>Good News</Text>
          </View>

          {news.length > 0 &&
            news.map((data, index) => (
              <NewsItem
                key={`berita-${index}`}
                title={data.title}
                date={data.date}
                image={data.image}
              />
            ))}
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  wrapperSection: {paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
});
