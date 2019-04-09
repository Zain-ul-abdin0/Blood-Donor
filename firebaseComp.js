import firebase from 'firebase';

const  config  = {
    apiKey: "AIzaSyAXxGihM41DPE9IHLi3m6kMolVaWKCh7VY",
    authDomain: "blood-donor-c3b44.firebaseapp.com",
    databaseURL: "https://blood-donor-c3b44.firebaseio.com",
    projectId: "blood-donor-c3b44",
    storageBucket: "blood-donor-c3b44.appspot.com",
    messagingSenderId: "713957350370"
  };
  const Firebase = firebase.initializeApp(config);
  export default Firebase;