var reportJokes: { joke: string, score: number, date: {} }[] = [];
var jokes = (): void => {
         fetch('https://icanhazdadjoke.com/', {
             method: 'GET',
             headers: { 'Accept': 'application/json' }
         })
            .then(res => {
                return res.json()
              })
             .then(data => console.log(data.joke))
             .catch(error => console.log(error))
     }
var jokes = (): void => {
    fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            document.getElementById("text").innerHTML = data.joke
            const broma: string = data.joke;
            document.getElementById("text").innerHTML = broma;

            let scoreSetObject: { joke: string, score: number, date: {} } = {
                joke: broma,
                score: 0,
                date: new Date().toLocaleString()
            }

            reportJokes.push(scoreSetObject)
        })
        .catch(error => console.log(error))
    }
    var score = () => {
        // let scoreSetObject: { joke: string, score: number, date: {} };
    
        let scoreSetObject = reportJokes[reportJokes.length - 1]
    
        const star1 = document.getElementById('star-1') as HTMLInputElement;
        const star2 = document.getElementById('star-2') as HTMLInputElement;
        const star3 = document.getElementById('star-3') as HTMLInputElement;
    
        if (star1.checked) {
            scoreSetObject.score = 1
        }
        else if (star2.checked) {
            scoreSetObject.score = 2
        }
        else if (star3.checked) {
            scoreSetObject.score = 3
        }
    }