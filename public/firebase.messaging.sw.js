importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCdBaGl6H_IuyzMyEnjq-6VRD5-2alxUtg",
    authDomain: "society-182906.firebaseapp.com",
    databaseURL: "https://society-182906.firebaseio.com",
    projectId: "society-182906",
    storageBucket: "society-182906.appspot.com",
    messagingSenderId: "583609948893"
  };
  firebase.initializeApp(config);

const messaging = firebase.messaging();

// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
// [END background_handler]