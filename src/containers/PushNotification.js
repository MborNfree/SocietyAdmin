import React, { Component } from "react";
import firebase from 'firebase';
import FCM from "react-native-fcm";

export default class PushNotification extends Component {
  constructor(props) {
    super(props);
    
          // Retrieve Firebase Messaging object.
          const messaging = firebase.messaging();
          messaging.requestPermission()
             .then(function() {
             console.log('Notification permission granted.');
             return  messaging.getToken();
             // TODO(developer): Retrieve an Instance ID token for use with FCM.
             // ...
             })
             .catch(function(err) {
             console.log('Unable to get permission to notify.', err);
             });
      
        // Get Instance ID token. Initially this makes a network call, once retrieved
        // subsequent calls to getToken will return from cache.
        messaging.getToken()
        .then(function(currentToken) {
          if (currentToken) {
            sendTokenToServer(currentToken);
            updateUIForPushEnabled(currentToken);
          } else {
            // Show permission request.
            console.log('No Instance ID token available. Request permission to generate one.');
            // Show permission UI.
            updateUIForPushPermissionRequired();
            setTokenSentToServer(false);
          }
        })
        .catch(function(err) {
          console.log('An error occurred while retrieving token. ', err);
          showToken('Error retrieving Instance ID token. ', err);
          setTokenSentToServer(false);
        });
  
        // Callback fired if Instance ID token is updated.
  messaging.onTokenRefresh(function() {
      messaging.getToken()
      .then(function(refreshedToken) {
        console.log('Token refreshed.');
        // Indicate that the new Instance ID token has not yet been sent to the
        // app server.
        setTokenSentToServer(false);
        // Send Instance ID token to app server.
        sendTokenToServer(refreshedToken);
        // ...
      })
      .catch(function(err) {
        console.log('Unable to retrieve refreshed token ', err);
        showToken('Unable to retrieve refreshed token ', err);
      });
    });
      
  }
   


  componentDidMount() {
      

    // this method generate fcm token.
    // FCM.requestPermissions();
    // FCM.getFCMToken().then(token => {
    //   console.log("TOKEN (getFCMToken)", token);
    // });
    
    // // This method get all notification from server side.
    // FCM.getInitialNotification().then(notif => {
    //   console.log("INITIAL NOTIFICATION", notif)
    // });
    
    // // This method give received notifications to mobile to display.
    // this.notificationUnsubscribe = FCM.on("notification", notif => {
    //   console.log("a", notif);
    //   if (notif && notif.local_notification) {
    //     return;
    //   }
    //   this.sendRemote(notif);
    // });
    
    // // this method call when FCM token is update(FCM token update any time so will get updated token from this method)
    // this.refreshUnsubscribe = FCM.on("refreshToken", token => {
    //   console.log("TOKEN (refreshUnsubscribe)", token);
    //   this.props.onChangeToken(token);
    // });
  }
  
  // This method display the notification on mobile screen.
  sendRemote(notif) {
    console.log('send');
    // FCM.presentLocalNotification({
    //   title: notif.title,
    //   body: notif.body,
    //   priority: "high",
    //   click_action: notif.click_action,
    //   show_in_foreground: true,
    //   local: true
    // });
  }

  componentWillUnmount() {
    // this.refreshUnsubscribe();
    // this.notificationUnsubscribe();
    
  }
  render() {
    return null;
  }
}