"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
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
const Data = helpers_1.toUTF8Array('["home",[{"name":"test"}, {"name":"test2"}], 5, false, "2019-09-09"]');
const MovieSchema = new _1.SchemaBuffer(Movie, Data);
const object = MovieSchema.rawValue();
const index = MovieSchema.index(0);
const key = MovieSchema.get("name");
console.log(object, { index, key });
