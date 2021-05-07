document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'complete') {
        document.getElementById('interactive');
        document.getElementById('init').style.display = "none";
        let app = document.getElementById("app");
        app.style.display = "block";
        var div = document.createElement('section');
        div.setAttribute('class', 'container');
        div.classList.add('prel');
        app.appendChild(div);
    }
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