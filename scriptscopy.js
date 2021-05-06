document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'complete') {
        document.getElementById('interactive');
        document.getElementById('init').style.display = "none";
        let app = document.getElementById("app");
        var div = document.createElement('section');
        div.setAttribute('class', 'container');
        div.classList.add('prel');

        content = '<section class="prel">' +
            '<div id="lander"></div>' +
            '<canvas class="pabs b0"></canvas>' +
            '<header class="pabs t0">' +
            '<div class="fl flc w100 h100 fldcl">' +
            '<h1 class="welcome-text text-center prel cd lhinit">1 Unit, <span class="highlight">INR <span id="rate">00.00</span></span></h1>' +
            '</div>' +
            ' </header>' +
            '</section>' +
            '<section class="prel fl flc fldcl">' +
            '<h1 class="welcome-text text-center prel cd lhinit"><span class="highlight">Contact Us</h1>' +
            '<div class="fl flc flww"><button data-action="whatsapp" class="prel call cp">Whatsapp</button><button data-action="call" class="prel call cp">Call</button></div>' +
            '</section>' +
            '<footer class="prel b0 w100 fl flc b-grey">Proud To Serve You: YTES</footer>';
        div.innerHTML = content;
        app.appendChild(div);


    }
}

$(document).ready(function() {

    $("#uploadRate").click(function() {
        console.log("clicked");
        rate = $("#rate").val()
        if (!isNaN(rate))
            uploadRate(rate);
        else alert('Enter A Numeric Value');
    });

    $("#rate").keyup(function() {
        if ($("#rate").val().length > 0)
            $('.btn').removeAttr('disabled');
        else
            $('.btn').attr('disabled', 'disabled');
    });
});

function uploadRate(rate) {
    console.log('uploading');
    $.ajax({
        url: "rateUpload.php",
        method: "POST",
        dataType: 'json',
        data: {
            rate: rate
        },

        /*beforeSend: function() {
            document.getElementById("pgloader").style.display = "block";
        },
        complete: function() {
            document.getElementById("pgloader").style.display = "none";
        },*/
        success: function(response) {
                console.log(response);
                if (response.status == true) {
                    console.log('rate uploaded');

                    $(".fallback").addClass("active");
                    $("#prompt").addClass("activePrompt");

                    var i = 5;
                    setInterval(function() {
                        if (i > 0)
                            $("#promptMessage").html('Rate Uploaded: ' + response.rate + '<br>Redirecting to Home Page: ' + i + 's');
                        else
                            window.location.href = "http://localhost/projects/ytes/";
                        i--;

                    }, 1000);

                } else {
                    console.log(response);

                    $(".fallback").addClass("active");
                    $("#prompt").addClass("activePrompt");
                    $("#promptMessage").text('rate Upload Failed. Try Again!');
                }
            }
            /*,
                    error: function(xhr, status, error) {
                        var err = eval("(" + xhr.responseText + ")");
                        alert(err.Message);
                    }*/
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