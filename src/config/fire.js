import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCE-2J8e9Edk704ka38-kVjTedVKnaeDrY',
  authDomain: 'projectauth-7be3c.firebaseapp.com',
  databaseURL: 'https://projectauth-7be3c-default-rtdb.firebaseio.com',
  projectId: 'projectauth-7be3c',
  storageBucket: 'projectauth-7be3c.appspot.com',
  messagingSenderId: '772428099420',
  appId: '1:772428099420:web:93668624eca7697b831b99',
};

const fire = initializeApp(firebaseConfig);
export default fire;