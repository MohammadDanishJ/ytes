checkElement('div.main') //use whichever selector you want
    .then(() => {
        var section = document.getElementById("app");
        //console.log('found');
        content =
            '<nav class="pfx fl flc w100 p12 highlight text-center">' +
            'Yunus Egg Store ' +
            '<span id="shopStatus" class="shopStatus closed">' +
            'closed' +
            '</span>' +
            '</nav>' +
            '<section class="prel">' +
            '<div id="lander"></div>' +
            '<canvas class="pabs b0"></canvas>' +
            '<header class="pabs t0">' +
            '<div class="fl flc w100 h100 fldcl">' +
            '<h1 class="welcome-text text-center prel cd lhinit">' +
            '1 Carat, ' +
            '<span class="highlight">' +
            'INR ' +
            '<span id="rate">' +
            'Loading...' +
            '</span>' +
            '</span>' +
            '<div class="text-center prel cd lhinit" style="color: #656565; font-size: 8pt; opacity: 0.8; padding: .5rem 1rem;">' +
            'Updated on: ' +
            '<span id="date">' +
            'Loading...' +
            '</span>' +
            '</div>' +
            '</h1>' +
            '</div>' +
            ' </header>' +
            '</section>' +
            '<section class="prel fl flc fldcl">' +
            '<div class="shape"></div>' +
            '<h1 class="welcome-text text-center prel cd lhinit"><span class="highlight">Contact Us</h1>' +
            '<div class="fl flc flww">' +
            '<button data-action="whatsapp" class="prel call cp fl flc">' +
            '<img src="assets/icons/whatsapp.svg" class="logo">' +
            'Whatsapp' +
            '</button>' +
            '<button data-action="call" class="prel call cp fl flc">' +
            '<img src="assets/icons/phone.svg" class="logo">' +
            'Call YTES' +
            '</button>' +
            '</div>' +
            '<address class="p12 text-center">' +
            'Visit Us: ' +
            '<strong>Yunus Egg Store</strong>, ' +
            'Azad Nagar Chauraha, Campbell Road. Balaganj, Lucknow<br><br>' +
            '<div class="tooltip">' +
            'Timming: 09:00 AM to 10:00PM' +
            '<span class="tooltiptext">' +
            'Call Before Visit' +
            '</span>' +
            '</div>' +
            ' </address>' +
            '</section>' +
            '<footer class="prel b0 w100 fl flc fldcl b-grey">' +
            '<div>' +
            'Proud To Serve You: YTES' +
            '</div>' +
            '<div style="opacity:0.8;transform: scale(0.9)">' +
            'Report Issues or Send Feedback ' +
            '<a href="mailto:mdtechs.contact@gmail.com">' +
            'Click Here' +
            '</a>' +
            '</div>' +
            '</footer>';

        section.innerHTML = content;

    }).then(function() {
        setTimeout(function() {
            document.querySelector('nav').classList.add('t0');
            if (shopOpen()) {
                shopStatus = document.getElementById('shopStatus');
                shopStatus.classList.remove('closed');
                shopStatus.classList.add('open');
                shopStatus.innerHTML = 'open';
            }
        }, 500);
    });



checkElement('canvas') //use whichever selector you want
    .then((element) => {
        readDataDrawChart(query);
    }).then((element) => {
        let calll = document.querySelectorAll('button.call');
        Array.from(calll).forEach(function(e) {
            e.addEventListener("click", function() {
                if (this.dataset.action == 'call') window.open('tel:9696484833');
                if (this.dataset.action == 'whatsapp') window.open('https://wa.me/+919696484833/');
            });
        });
    });

function shopOpen() {
    var d = new Date(); // current time
    var hours = d.getHours();
    var mins = d.getMinutes();
    var day = d.getDay();

    return hours >= 9 &&
        (hours < 21 || hours === 21 && mins <= 51);
}