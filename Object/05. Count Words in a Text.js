function solve(str){

    let data = str[0].match(/\w+/gim);
    let obj = {};

    for(let i = 0; i < data.length; i++){
        if(typeof obj[data[i]] === "undefined"){
            obj[data[i]] = 0;
        }
        obj[data[i]]++;
    }

    console.log(obj);
}

solve2([`Far too slow, you're far too slow.`]);

function solve2(str){
    console.log(str[0]
            .match(/\w+/gim)
            .reduce((a, b) => {
                if(typeof a[b] === "undefined"){
                    a[b] = 0;
                }
                a[b]++;
                return a;
            }, {}));
}