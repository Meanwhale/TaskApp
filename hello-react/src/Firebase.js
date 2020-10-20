
import firebase from 'firebase';
const config = {
	apiKey: "AIzaSyA6usNsw4HvlUD6YlgvOLwQtNM7LBEr-mU",
	authDomain: "task-app-db.firebaseapp.com",
	databaseURL: "https://task-app-db.firebaseio.com",
	projectId: "task-app-db",
	storageBucket: "task-app-db.appspot.com",
	messagingSenderId: "890516747410"
};
firebase.initializeApp(config);

export default firebase;