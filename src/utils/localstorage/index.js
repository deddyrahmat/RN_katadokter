import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    // const jsonValue = JSON.stringify(value);
    // await AsyncStorage.setItem(key, jsonValue);
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('Your System ', e);
  }
};

export const getData = async (key) => {
  try {
    // const jsonValue = await AsyncStorage.getItem(key);
    // return jsonValue != null ? JSON.parse(jsonValue) : null;
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('Your System ', e);
  }
};
