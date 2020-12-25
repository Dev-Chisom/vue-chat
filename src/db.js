import  firebase from 'firebase/app';
import 'firebase/database';


const config = {
    apiKey: "AIzaSyBf20tD7YJfd9doQY53EpFEK4xzCRznT4Q",
    authDomain: "vuechat-d28a1.firebaseapp.com",
    projectId: "vuechat-d28a1",
    storageBucket: "vuechat-d28a1.appspot.com",
    messagingSenderId: "770845072241",
    appId: "1:770845072241:web:6ffe9393ae88b411f5b4d0"
}
const db = firebase.initializeApp(config);
export default db;