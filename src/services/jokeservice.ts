
//-----------Nivel 1------------------------

//import { IJoke } from "../interfaces/interfaces"
// export class JokeService {

//   public getJoke():
//   Promise<IJoke>{
//       return fetch("https://icanhazdadjoke.com/", {
//          headers: {
//            Accept: "application/json"
//          }
//        }).then(res => res.json())
//        .then(res=>{
//           return res as IJoke
//        })

//    }}

//----------Nivel 2-----------------------------------

export class JokesService{
  public  fetchData = async () => {
    try {
      const response = await Promise.all<any>([
        fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        }).then(async value => await value.json()),
        fetch("https://api.chucknorris.io/jokes/random").then(async value => await value.json())
    ])
    const jokeArrayVAlue = [];
    jokeArrayVAlue[0] =response[0].joke.toString();
    jokeArrayVAlue[1] = response[1].value.toString();
    
   return  jokeArrayVAlue[Math.floor(Math.random()*jokeArrayVAlue.length)]

    } catch (error) {
      console.log("Error", error)
    }
  }
}