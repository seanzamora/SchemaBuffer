
import { toUTF8Array } from './helpers';
import { SchemaBuffer } from '.';

class Movie {
    name:string = "Default Title";
    cast:string[] = [];
    rating:number = 5;
    active:boolean = false;
    date = (value:string)=>{
        return new Date(value);
    }
}

const Data:number[] = toUTF8Array('["home",[{"name":"test"}, {"name":"test2"}], 5, false, "2019-09-09"]');

const MovieSchema = new SchemaBuffer(Movie, Data);

const object = MovieSchema.rawValue();
const index = MovieSchema.index(0);
const key = MovieSchema.get("name");

console.log(object,{index, key})