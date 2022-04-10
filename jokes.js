var reportJokes = [];
var jokes = function () {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (data) { return console.log(data.joke); })["catch"](function (error) { return console.log(error); });
};
var jokes = function () {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    })
        .then(function (res) {
        return res.json();
    })
        .then(function (data) {
        document.getElementById("text").innerHTML = data.joke;
        var broma = data.joke;
        document.getElementById("text").innerHTML = broma;
        var scoreSetObject = {
            joke: broma,
            score: 0,
            date: new Date().toLocaleString()
        };
        reportJokes.push(scoreSetObject);
    })["catch"](function (error) { return console.log(error); });
};
var score = function () {
    // let scoreSetObject: { joke: string, score: number, date: {} };
    var scoreSetObject = reportJokes[reportJokes.length - 1];
    var star1 = document.getElementById('star-1');
    var star2 = document.getElementById('star-2');
    var star3 = document.getElementById('star-3');
    if (star1.checked) {
        scoreSetObject.score = 1;
    }
    else if (star2.checked) {
        scoreSetObject.score = 2;
    }
    else if (star3.checked) {
        scoreSetObject.score = 3;
    }
};
