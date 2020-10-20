import React from 'react';
import firebase from "firebase";

const config = {
	apiKey: "AIzaSyA6usNsw4HvlUD6YlgvOLwQtNM7LBEr-mU",
	authDomain: "task-app-db.firebaseapp.com",
	databaseURL: "https://task-app-db.firebaseio.com",
	projectId: "task-app-db",
	storageBucket: "task-app-db.appspot.com",
	messagingSenderId: "890516747410"
};
firebase.initializeApp(config);

class User extends React.Component {
	
	constructor() {
	super();
		this.state = { // synchronized with the form
		 email: "",
		 fullname: ""
		};
	}
 
	updateInput = e => {
		this.setState({
		[e.target.name]: e.target.value
		});
	}
	addUser = e => {
		e.preventDefault();
		const db = firebase.firestore();
		db.settings({
			timestampsInSnapshots: true
		});
		const userRef = db.collection("users").add({
			fullname: this.state.fullname,
			email: this.state.email
		});	
		this.setState({
			fullname: "",
			email: ""
		});
	};

	render() {
		return (
			<form onSubmit={this.addUser}>
			<input
				type="text"
				name="fullname"
				placeholder="Full name"
				onChange = {this.updateInput} // set our component state, when a user enters data into the form
				value = {this.state.fullname} // synch. state value
			/>
			<input
				type="email"
				name="email"
				placeholder="E-mail"
				onChange = {this.updateInput}
				value = {this.state.email}
				/>
				<button type="submit">Submit</button>
			</form>
			);
			}
	 }
export default User;
