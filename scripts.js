checkElement('section.container') //use whichever selector you want
    .then(() => {
        var section = document.getElementsByClassName("container")[0];
        //console.log('found');
        content = '<section class="prel">' +
            '<div id="lander"></div>' +
            '<canvas class="pabs b0"></canvas>' +
            '<header class="pabs t0">' +
            '<div class="fl flc w100 h100 fldcl">' +
            '<h1 class="welcome-text text-center prel cd lhinit">1 Carat, <span class="highlight">INR <span id="rate">Loading...</span></span>' +
            '<div class="text-center prel cd lhinit" style="color: #656565; font-size: 8pt; opacity: 0.8; padding: .5rem 1rem;">Updated on: <span id="date">Loading...</span></div>' +
            '</h1>' +
            '</div>' +
            ' </header>' +
            '</section>' +
            '<section class="prel fl flc fldcl">' +
            '<h1 class="welcome-text text-center prel cd lhinit"><span class="highlight">Contact Us</h1>' +
            '<div class="fl flc flww"><button data-action="whatsapp" class="prel call cp">Whatsapp</button><button data-action="call" class="prel call cp">Call</button></div>' +
            '</section>' +
            '<footer class="prel b0 w100 fl flc b-grey">Proud To Serve You: YTES</footer>';

        section.innerHTML = content;
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