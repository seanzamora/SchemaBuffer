
export class SchemaBuffer{
    
    byteArray:number[] = [];
    properties:string[] = [];
    parent:any;
    
    constructor(object:any, data:number[]) {
        this.byteArray = data;
        this.parent = new object();
        this.properties = Object.getOwnPropertyNames(this.parent)
    }

    index(index:number) {
        var result = "";
        let idx = -1; 
        let char = -1;
        let array = -1;

        for (var i = 0; i < this.byteArray.length; i++) {

            char++;

            if((this.byteArray[i] == 91|| this.byteArray[i] == 93) && char != 0){
                array++
                result += String.fromCharCode(this.byteArray[i]);
            }

            if( this.byteArray[i] != 91 && this.byteArray[i] != 93 && (array != -1 || this.byteArray[i] != 34) ){
                result += String.fromCharCode(this.byteArray[i]);
            }

            if(this.byteArray[i] === 44 && array == -1){
                idx++;
                if(idx == index){
                    return result.slice(0,-1)
                }else{
                    result = "";
                }
            }

            if(array == 1){
                array = -1;
            }
            
        }

        return result.slice(0,-1)
    }

    get(key:string){
        let res:any =  null;
        for (let index = 0; index < this.properties.length; index++) {
            const prop = this.properties[index];
            if(key === prop){
              return this.parseValue(index,prop);
            }
        }
        return res;
    }

    parseValue(index:number, prop:string){
        const value = this.parent[prop];
        const type = typeof(value);
        switch(type){
            default:
               return this.index(index);
                break;
            case "object":
                return JSON.parse(this.index(index));
                break;
            case "number":
                return parseInt(this.index(index));
                break;
            case "function":
                return value(this.index(index));
                break;
            case "boolean":
                return (this.index(index) === 'true')?true:false;
                break;
        }
    }

    rawValue(){
        let obj:any = {};
        for (let index = 0; index < this.properties.length; index++) {
            const prop = this.properties[index];
            obj[prop] = this.parseValue(index,prop);
        }
        return obj;
    }
}

