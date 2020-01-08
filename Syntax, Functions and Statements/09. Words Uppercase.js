function solve(str){

    console.log(str
        .match(/\w+/gim)
        .map(x => x.toUpperCase()).join(', ')
    );
}

solve('Hi, how are you?');