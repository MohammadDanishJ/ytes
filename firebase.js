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

let array = [],
    i = 0,
    query = firebase.firestore()
    .collection('rate')
    .orderBy('date', 'desc')
    .limit(7),
    firstAttempt = true;

function resized() {
    $.when(setCanvasProp()).then(drawChart(array));
}

function readDataDrawChart(query) {
    //Start listening to the query.
    query.onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            //console.log(change);
            //console.log(change.type);

            if (change.type === 'removed') {
                deleteMessage(change.doc.id);
            } else {
                var message = change.doc.data();
                let date = message.date ? message.date.toDate() : '';
                //console.log('first attempt: ' + firstAttempt);
                if (firstAttempt) {
                    array[i] = [date, message.rate];
                } else {
                    array.reverse(); //to ad data on beginning, this makes array sorted by timestamp
                    array[i] = [date, message.rate];
                    array.reverse(); //to print according to need
                }
                i++;
            }
        });

        firstAttempt = false;
        //console.log(array);
        drawChart(array);
        resized();

    });
}


// Delete a Message from the UI.
function deleteMessage(id) {
    resized();
}