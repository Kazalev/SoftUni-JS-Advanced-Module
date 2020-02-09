class Stringer {
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }

    increase(innerLength){
        this.innerLength += innerLength;
    }

    decrease(innerLength){
        this.innerLength = Math.max(0, this.innerLength - innerLength);
    }

    toString(){
        if(this.innerString.length > this.innerLength){
            return this.innerString.substring(0, this.innerLength) + '...';
        } else if(this.innerString.length < this.innerLength){
            return this.innerString;
        } else {
            return '...';
        }
    }   
}


let test = new Stringer('Test', 4);
console.log(test.toString());