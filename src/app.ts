//import { JokeService } from "./services/jokeservice.js";
import { JokesService } from "./services/jokeservice.js"; // obtener datos de APIs
import { IJokeInfo } from "./services/ratingservice.js"; // preparar objeto de resultado

//const jokeService = new JokeService;
const jokesService = new JokesService;

const nextButton: HTMLButtonElement = document.getElementById('next-button') as HTMLButtonElement;
const result: HTMLElement = document.querySelector(".joke") as HTMLElement;
const ratingBox: HTMLElement = document.querySelector(".rating-box") as HTMLElement;
const ratingBlock: HTMLElement = document.createElement("ul") as HTMLElement;
ratingBlock.classList.add('rating');
let reportJokes: IJokeInfo[] = [];
let jokeInfo: IJokeInfo;

ratingBlock.innerHTML = `<li> <button type='button' id="uno" class="rating-item">&#128531;</button></li>
<li> <button type='button' id="dos"  class="rating-item">&#128528;</button></li>
<li> <button type='button' id="tres" class="rating-item">&#128518;</button></li>`

nextButton.addEventListener('click', putJoke);
function putJoke() {
    jokesService.fetchData().then(joke => {
        result.innerHTML = joke; // obtener datos de API
        let isoDate: string = new Date().toISOString(); // conseguir data en formato ISO
        ratingBox.appendChild(ratingBlock); // añadir bloque de rating

        let uno: HTMLButtonElement = document.getElementById('uno') as HTMLButtonElement;
        let dos: HTMLButtonElement = document.getElementById('dos') as HTMLButtonElement;
        let tres: HTMLButtonElement = document.getElementById('tres') as HTMLButtonElement;
        let ratingArray = [uno, dos, tres];

        ratingArray.filter((el: HTMLButtonElement) => { // conseguir resultado de evaluacion
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
        })  
    }) 
    if(jokeInfo !== undefined ){
        reportJokes.push(jokeInfo);  } // mostrar resultado de evaluacion
    console.log(reportJokes);
}

//obtener datos de tiempo
function getWeather() {
    return  fetch("https://api.openweathermap.org/data/2.5/weather?q=barcelona&units=metric&appid=644a219f426a3224328405aa28d80b8f").then(function (res) { return res.json(); })
        .then(function (res) {
            return res;
        });
}

// mostrar datos de tiempo
let weather:HTMLElement = document.querySelector(".weather") as HTMLElement;
getWeather().then(function (data){
weather.innerHTML = `temperatura hoy: ${data.main.temp} &degC ` ;
})

