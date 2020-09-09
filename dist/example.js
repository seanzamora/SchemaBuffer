"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class Movie {
    constructor() {
        this.name = "Default Title";
        this.cast = [];
        this.rating = 5;
        this.active = false;
        this.date = (value) => {
            return new Date(value);
        };
    }
}
//Data variable is equivalent to: ["home",[{"name":"test"}, {"name":"test2"}], 5, false, "2019-09-09"]
const Data = [
    91, 34, 104, 111, 109, 101, 34, 44, 91, 123, 34, 110,
    97, 109, 101, 34, 58, 34, 116, 101, 115, 116, 34, 125,
    44, 32, 123, 34, 110, 97, 109, 101, 34, 58, 34, 116,
    101, 115, 116, 50, 34, 125, 93, 44, 32, 53, 44, 32,
    102, 97, 108, 115, 101, 44, 32, 34, 50, 48, 49, 57,
];
//Instantiate SchemaBuffer pass both Schema class and Data.
const MovieSchema = new _1.SchemaBuffer(Movie, Data);
//Get raw object value
const object = MovieSchema.rawValue();
//Get value with index
const index = MovieSchema.index(0);
//Get value with key
const key = MovieSchema.get("name");
console.log(object, { index, key });
