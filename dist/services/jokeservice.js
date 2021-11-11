//-----------Nivel 1------------------------
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export class JokesService {
    constructor() {
        this.fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield Promise.all([
                    fetch("https://icanhazdadjoke.com/", {
                        headers: {
                            Accept: "application/json"
                        }
                    }).then((value) => __awaiter(this, void 0, void 0, function* () { return yield value.json(); })),
                    fetch("https://api.chucknorris.io/jokes/random").then((value) => __awaiter(this, void 0, void 0, function* () { return yield value.json(); }))
                ]);
                const jokeArrayVAlue = [];
                jokeArrayVAlue[0] = response[0].joke.toString();
                jokeArrayVAlue[1] = response[1].value.toString();
                return jokeArrayVAlue[Math.floor(Math.random() * jokeArrayVAlue.length)];
            }
            catch (error) {
                console.log("Error", error);
            }
        });
    }
}
//# sourceMappingURL=jokeservice.js.map