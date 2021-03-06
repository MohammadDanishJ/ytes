let canvas, ctx, rXGrid, rYGrid, xGrid, yGrid;


$(document).ready(function() {


    checkElement('canvas') //use whichever selector you want
        .then((element) => {
            //console.info(element);
            //Do whatever you want now the element is there
            canvas = document.querySelector('canvas');
            //console.log(canvas);

            setCanvasProp();


            // let data = {
            //     Sunday: 100,
            //     Monday: 110,
            //     Tuesday: 115,+
            //     Wednesday: 110,
            //     Friday: 125,
            //     Today: 130
            // }


            // const entries = Object.entries(data);

        });

    window.addEventListener("resize", resized);
});


function setCanvasProp() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * .7;

    rXGrid = Math.trunc(canvas.width / 7);
    rYGrid = Math.trunc(canvas.height / 9);


    xGrid = rXGrid;
    yGrid = rYGrid;

    ctx = canvas.getContext('2d');
    ctx.font = "10pt sans-serif";

    ctx.fillStyle = "#f0f0f0";
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    return true;
}

function drawGrids() {
    ctx.beginPath();


    //Horizontal Lines
    while (yGrid < canvas.height) {
        ctx.moveTo(0, yGrid);
        ctx.lineTo(canvas.width, yGrid);
        yGrid += rYGrid;
    }

    //Vertical Lines
    while (xGrid < canvas.width) {
        ctx.moveTo(xGrid, 0);
        ctx.lineTo(xGrid, canvas.height);
        xGrid += rXGrid;
    }

    ctx.strokeStyle = "gray";
    ctx.stroke();
}

function xblocks(count) {
    return count * rXGrid; //return count * 50;
}

function yblocks(count) {
    return count * rYGrid; //return count * 50;
}

function drawAxis() {
    let yPlot = 9,
        pop = 0;

    ctx.beginPath();
    ctx.strokeStyle = "white";

    ctx.moveTo(xblocks(1), yblocks(1));
    ctx.lineTo(xblocks(1), yblocks(9));
    ctx.lineTo(xblocks(8), yblocks(9));

    //ctx.moveTo(xblocks(2), yblocks(8));

    for (let i = 1; i <= 9; i++) {
        ctx.fillText(pop, xblocks(.5), yblocks(yPlot));
        yPlot -= 1;
        pop += 20;
    }

    ctx.stroke();
}


function drawChart(entries) {
    ctx.beginPath();
    //console.log(entries);
    let rateHolder = document.getElementById('rate'),
        time = document.getElementById('date');
    rateHolder.innerHTML = entries[0][1];
    time.innerHTML = entries[0][0];
    var xPlot = 6,
        up = true;
    for (const [dayR, rate] of entries) {
        //console.log(dayR.getDay());
        var rateInBlocks = rate / 10,
            //t = dayR.split(/[- :]/) /*Split MYSQL Date*/ ,
            //d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5])) /*Convert to Javascript Date*/ ,
            curDate = new Date,
            days = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dName = days[dayR.getMonth()],
            curDName = days[curDate.getMonth()];
        //console.log(dayR.getMonth());
        //console.log('dname: ' + dName);
        dName = dayR.getDate() + dName == curDate.getDate() + curDName ? 'Today' : dayR.getDate() + ' ' + dName;

        // if (canvas.width >= 768)
        if (up == true) {
            ctx.fillText(dName + ", " + rate, xblocks(xPlot - .2), yblocks(11 - (rateInBlocks / 2) + .8));
            up = false;
        } else {
            ctx.fillText(dName + ", " + rate, xblocks(xPlot - .2), yblocks(11 - (rateInBlocks / 2) + 1.4));
            up = true;
        }
        console.log(up);
        // else
        //     ctx.fillText(rate, xblocks(xPlot + .1), yblocks(8 - (rateInBlocks / 2) + 4));

        ctx.strokeStyle = "white";
        ctx.lineTo(xblocks(xPlot), yblocks(8 - (rateInBlocks / 2) + 4));

        ctx.arc(xblocks(xPlot), yblocks(8 - (rateInBlocks / 2) + 4), 2, 0, Math.PI * 2, true);

        xPlot--;
    }

    entries.length <= 6 ? ctx.lineTo(xblocks(0), yblocks(9)) : '';


    ctx.stroke();
}



function loadChart() {
    $.ajax({
        url: "chart.php",
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
            // console.log('DATA:' + data);
            // console.log(JSON.parse(data));
            data = JSON.parse(data);

            const entries = Object.entries(data);
            console.log(entries);

            drawChart(entries);

        }
    })
}