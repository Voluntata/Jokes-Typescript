//import { JokeService } from "./services/jokeservice.js";
import { JokesService } from "./services/jokeservice.js"; // obtener datos de APIs
import { IJokeInfo } from "./services/ratingservice.js"; // preparar objeto de resultado
//const jokeService = new JokeService;
const jokesService = new JokesService;
const container = document.querySelector('.container');
const nextButton = document.getElementById('next-button');
const result = document.querySelector(".joke");
const ratingBox = document.querySelector(".rating-box");
const ratingBlock = document.createElement("ul");
ratingBlock.classList.add('rating');
let reportJokes = [];
let jokeInfo;
ratingBlock.innerHTML = `<li> <button type='button' id="uno" class="rating-item">&#128531;</button></li>
<li> <button type='button' id="dos"  class="rating-item">&#128528;</button></li>
<li> <button type='button' id="tres" class="rating-item">&#128518;</button></li>`;
function randombg() {
    var random = Math.floor(Math.random() * 7) + 0;
    var bigSize = ["url('../img/blob_0.svg')",
        "url('../img/blob_1.svg')",
        "url('../img/blob_2.svg')",
        "url('../img/blob_3.svg')",
        "url('../img/blob_4.svg')",
        "url('../img/blob_5.svg')",
        "url('../img/blob_6.svg')",
    ];
    return bigSize[random].toString();
}
nextButton.addEventListener('click', putJoke);
function putJoke() {
    jokesService.fetchData().then(joke => {
        result.innerHTML = joke; // obtener datos de API
        let isoDate = new Date().toISOString(); // conseguir data en formato ISO
        ratingBox.appendChild(ratingBlock); // añadir bloque de rating
        let uno = document.getElementById('uno');
        let dos = document.getElementById('dos');
        let tres = document.getElementById('tres');
        let ratingArray = [uno, dos, tres];
        ratingArray.filter((el) => {
            el.addEventListener('click', function () {
                if (el === uno) {
                    jokeInfo = new IJokeInfo(result.innerHTML, 1, isoDate);
                }
                if (el === dos) {
                    jokeInfo = (new IJokeInfo(result.innerHTML, 2, isoDate));
                }
                if (el === tres) {
                    jokeInfo = (new IJokeInfo(result.innerHTML, 3, isoDate));
                }
            });
        });
    });
    if (jokeInfo !== undefined) {
        reportJokes.push(jokeInfo);
    } // mostrar resultado de evaluacion
    console.log(reportJokes);
    container.style.backgroundImage = randombg();
}
//obtener datos de tiempo
function getWeather() {
    return fetch("https://api.openweathermap.org/data/2.5/weather?q=barcelona&units=metric&appid=644a219f426a3224328405aa28d80b8f").then(function (res) { return res.json(); })
        .then(function (res) {
        return res;
    });
}
// mostrar datos de tiempo
// let weather:HTMLElement = document.querySelector(".weather") as HTMLElement;
// getWeather().then(function (data){
// weather.innerHTML = `temperatura hoy: ${data.main.temp} &degC ` ;
// })
//# sourceMappingURL=app.js.map