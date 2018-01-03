import firebase from 'firebase';
import s from './secrets.js';

const config = {
  apiKey: s.apiKey,
  authDomain: s.authDomain ,
  databaseURL: s.databaseURL ,
  projectId: s.projectId ,
  storageBucket: s.storageBucket ,
  messagingSenderId: s.messagingSenderId
};

const app = firebase.initializeApp(config);
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { app, facebookProvider };