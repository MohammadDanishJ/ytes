// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyD8v4u-tsvMSyLt1oktRzwXeualdSRD0EU",
//     authDomain: "ytes-f12bc.firebaseapp.com",
//     projectId: "ytes-f12bc",
//     storageBucket: "ytes-f12bc.appspot.com",
//     messagingSenderId: "658274384330",
//     appId: "1:658274384330:web:cca9122071ff6194df7733",
//     measurementId: "G-SJTGQ97D9Z"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>


var firebaseConfig = {
    apiKey: "AIzaSyD8v4u-tsvMSyLt1oktRzwXeualdSRD0EU",
    authDomain: "ytes-f12bc.firebaseapp.com",
    projectId: "ytes-f12bc",
    storageBucket: "ytes-f12bc.appspot.com",
    messagingSenderId: "658274384330",
    appId: "1:658274384330:web:cca9122071ff6194df7733",
    measurementId: "G-SJTGQ97D9Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log('at firebase');
let email = 'mohddanish8299@gmail.com',
    password = 'Danish.0601';


firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log('logged in');
        // ...
        var db = firebase.firestore();

        db.collection("rate").add({
                date: "01-01-2001",
                rate: "125"
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
    });