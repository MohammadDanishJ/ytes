document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'complete') {
        document.getElementById('interactive');

        document.getElementById('init').style.display = "none";
        let app = document.getElementById("app");
        var div = document.createElement('section');
        div.setAttribute('class', 'container');
        div.classList.add('prel');
        app.appendChild(div);

        checkElement('canvas') //use whichever selector you want
            .then((element) => {
                let calll = document.querySelectorAll('button.call');
                Array.from(calll).forEach(function(e) {
                    e.addEventListener("click", function() {
                        if (this.dataset.action == 'call') window.open('tel:9696484833');
                        window.open('https://wa.me/+919696484833/');
                    });
                });
            });

        loadRate();

    }
}

//$(document).ready(function() {});


function loadRate() {
    $.ajax({
        url: "loadRate.php",
        method: "POST",
        /*data: {
            delete_n_id: delete_n_id
        },*/

        /*beforeSend: function() {
            document.getElementById("pgloader").style.display = "block";
        },
        complete: function() {
            document.getElementById("pgloader").style.display = "none";
        },*/
        success: function(data) {
            //console.log(data);
            $("#app>.container").append(data).fadeIn("slow");
            loadChart();
        }
    })
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