let status = document.getElementById('status'),
    rate = document.getElementById('rate'),
    email = 'mohddanish8299@gmail.com',
    password = 'Danish.0601',
    user, btn = document.getElementById('uploadRateFire');

rate.addEventListener('keyup', toggleButton);


function toggleButton() {
    if (rate.value) {
        btn.removeAttribute('disabled');
    } else {
        btn.setAttribute('disabled', 'true');
    }
}

function uploadRateFire(user) {
    //console.log('attempting write');
    status.innerHTML = 'Uploading Rate...';
    if (!firebase.auth().currentUser || rate == 0) return;


    var db = firebase.firestore();

    db.collection("rate").add({
            uid: user.uid,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            rate: rate.value
        })
        .then((docRef) => {
            //console.log("Document written with ID: ", docRef.id);
            status.innerHTML = 'Rate Uploaded Successfully';
        })
        .catch((error) => {
            //console.error("Error adding document: ", error);
            status.innerHTML = 'Error Uploading Rate<br>Try Again or Refresh Page';
        });

}


// function signIn() {
//     // Sign into Firebase 
//      
// }


//login automatically
firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        //console.log('logged in: ' + user.uid);
        status.innerHTML = 'Logged In';
        rate.removeAttribute('disabled');
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        //console.log(errorCode);
        status.innerHTML = 'Error Logging: Refresh Page';
    });

// Saves a new rate to your Cloud Firestore database.
function saveMessage(rate) {
    // Add a new message entry to the database.
    return firebase.firestore().collection("rate").add({
        uid: getUserId(),
        date: firebase.firestore.FieldValue.serverTimestamp(),
        rate: rate
    }).catch(function(error) {
        console.error('Error writing new message to database', error);
    });
}

// Returns the signed-in user's display id.
function getUserId() {
    return firebase.auth().currentUser.uid;
}

// Triggered when the send rate form is submitted.
function onMessageFormSubmit(e) {

    status.innerHTML = 'Uploading Rate...';
    e.preventDefault();

    // Check that the user entered a message and is signed in.
    if (rate.value && checkSignedInWithMessage()) {
        //console.log('rate value: ' + rate.value);
        saveMessage(rate.value).then(function() {
            // // Clear message text field and re-enable the SEND button.
            // resetMaterialTextfield(messageInputElement);
            rate.value = '';
            toggleButton();

            status.innerHTML = 'Rate Uploaded Successfully';
            //console.log('rate uploaded');
        });
    }
}


// Returns true if user is signed-in. Otherwise false and displays a message.
function checkSignedInWithMessage() {
    // Return true if the user is signed in Firebase
    if (isUserSignedIn()) {
        //console.log('signed in');
        return true;
    }

    // Display a message to the user using a Toast.
    // var data = {
    //     message: 'You must sign-in first',
    //     timeout: 2000
    // };
    // signInSnackbarElement.MaterialSnackbar.showSnackbar(data);
    //console.log(data);

    status.innerHTML = 'You are not logged In<br>Login To rate Upload ';
    return false;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
    //console.log("signed in: " + !!firebase.auth().currentUser)
    return !!firebase.auth().currentUser;
}

btn.addEventListener('click', onMessageFormSubmit);