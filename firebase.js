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
//console.log('at firebase');



let array = [],
    i = 0,
    rateHolder, time;
//console.log(rateHolder);
var query = firebase.firestore()
    .collection('rate')
    .orderBy('date', 'desc')
    .limit(7);

checkElement('canvas') //use whichever selector you want
    .then((element) => {
        rateHolder = document.getElementById('rate'),
            time = document.getElementById('time');
        readDataDrawChart(query);
    });

function resized() {
    $.when(setCanvasProp()).then(drawChart(array));
}


function readDataDrawChart(query) {
    //Start listening to the query.
    query.onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            //console.log(change.type);
            if (change.type === 'removed') {
                deleteMessage(change.doc.id);
            } else {
                var message = change.doc.data();
                //console.log('message.date:' + message.date);
                var myDate = new Date(message.date * 1000);
                var formatedTime = myDate.toJSON();
                //console.log(formatedTime);
                let date = message.date ? message.date.toDate() : '';
                array.reverse(); //to ad data on beginning, this makes array sorted by timestamp
                array[i] = [date, message.rate];
                array.reverse(); //to print according to need
                i++;
                //response.push(message);
                //console.log(message);
                // timestamp = message.date ? message.date.toMillis() : Date.now();
                // timestamp = timestamp.toDate();
                //console.log(change.doc.id + ' ' + date + ' ' + message.rate + ' ' + message.uid);

                //console.log(message.rate, date);

                //chartFromFirebase(message);
                //console.log(array);
                //resized();
            }
        });

        drawChart(array);
        resized();

    });
}

function rafAsync() {
    return new Promise(resolve => {
        requestAnimationFrame(resolve); //faster than set time out
    });
}

function checkElement(selector) {
    if (document.querySelector(selector) === null) {
        return rafAsync().then(() => checkElement(selector));
    } else {
        return Promise.resolve(true);
    }
}

// Delete a Message from the UI.
function deleteMessage(id) {
    resized();
}