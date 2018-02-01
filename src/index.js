import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './Admin';
import Login from './Login';
import firebase from './config/database'
import Config from './config/app';



//AUTHENTICATION
var loggedIn = false;
if (Config.firebaseConfig.apiKey) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log("User is signed in " + user.email);

      if (Config.adminConfig.allowedUsers != null && Config.adminConfig.allowedUsers.indexOf(user.email) == -1) {
        //Error, this user is not allowed anyway
        alert("The user " + user.email + " doens't have access to this admin panel!");
        firebase.auth().signOut();
      } else {
        loggedIn = true;
        displayApp();
      }



    } else {
      // No user is signed in.
      console.log("No user is signed in ");
      loggedIn = false;
      displayApp();
      if (window.display) {
        window.display();
      }

    }
  })
} else {
  // No user is signed in.
  console.log("No user is signed in, step 1 ");
  loggedIn = false;
  displayApp();
  if (window.display) {
    window.display();
  }
}


function displayApp() {
  if (loggedIn) {
    ReactDOM.render(
      <Admin />,
      document.getElementById('root')
    );
  } else {
    ReactDOM.render(
      <Login />,
      document.getElementById('root')
    );
  }
}
displayApp();
