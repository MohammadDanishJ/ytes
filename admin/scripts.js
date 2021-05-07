document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'complete') {
        document.getElementById('interactive');

        document.getElementById('init').style.display = "none";
        let app = document.getElementById("app");
        app.style.display = "block";
        var div = document.createElement('div');
        div.setAttribute('class', 'container');
        app.appendChild(div);


    }
}
$(document).ready(function() {

    // $("#uploadRate").click(function() {
    //     //console.log("clicked");
    //     rate = $("#rate").val()
    //     if (!isNaN(rate))
    //         console.log('up[loading started'); //uploadRate(rate);
    //     else alert('Enter A Numeric Value');
    // });


});
$("#rate").keyup(function() {
    console.log($("#rate").val());
    if ($("#rate").val().length > 0) {
        console.log($("#rate").val().length);
        $('.btn').removeAttr('disabled');
    } else {
        console.log($("#rate").val().length);
        $('.btn').attr('disabled', 'disabled');
    }
});

function uploadRate(rate) {
    //console.log('uploading');
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
                //console.log(response);
                if (response.status == true) {
                    //console.log('rate uploaded');

                    $(".fallback").addClass("active");
                    $("#prompt").addClass("activePrompt");

                    var i = 5;
                    setInterval(function() {
                        if (i > 0)
                            $("#promptMessage").html('Rate Uploaded: ' + response.rate + '<br>Redirecting to Home Page: ' + i + 's');
                        else
                            window.location.href = "/";
                        i--;

                    }, 1000);

                } else {
                    //console.log(response);

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