import firebase from 'firebase/app'
import 'firebase/auth'


 var firebaseConfig = {
   apiKey: "AIzaSyBdOty0AH4z66oHcxQb0r1Te97OTjS4Wzs",
   authDomain: "reactprojauth.firebaseapp.com",
   projectId: "reactprojauth",
   storageBucket: "reactprojauth.appspot.com",
   messagingSenderId: "336154674163",
   appId: "1:336154674163:web:f9b6378c37c77e578d0886",
 };

const app=firebase.initializeApp(firebaseConfig);
export const auth=app.auth();
export default app;