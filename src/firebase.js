import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzPJ2z737T8L59zoM22Of6A90EN13bpQo",
    authDomain: "tinder-clone-599d7.firebaseapp.com",
    databaseURL: "https://tinder-clone-599d7.firebaseio.com",
    projectId: "tinder-clone-599d7",
    storageBucket: "tinder-clone-599d7.appspot.com",
    messagingSenderId: "933043215175",
    appId: "1:933043215175:web:b73ee4738c963f211a0a62",
    measurementId: "G-9YSNB7TVP0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;