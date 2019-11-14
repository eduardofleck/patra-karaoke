import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzeQm9ehvhuu-Iq1VNEyw6DO0pEmjVesM",
    authDomain: "petra-karaoke.firebaseapp.com",
    databaseURL: "https://petra-karaoke.firebaseio.com"

});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp }

export default base;