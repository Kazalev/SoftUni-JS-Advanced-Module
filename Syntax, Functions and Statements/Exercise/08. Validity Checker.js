function solve(arr){

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let first = Number(distance(x1, y1,0, 0));
    let second = Number(distance(x2, y2,0, 0));
    let third = Number(distance(x1, y1, x2, y2));

    
    isValidNumber(first, x1, y1, 0, 0);
    isValidNumber(second, x2, y2, 0, 0);
    isValidNumber(third, x1, y1, x2, y2);

    function distance(x1, y1, x2, y2) {
   
        let distX = x1 - x2;
        let distY = y1 - y2;
     
        let result = Math.sqrt(Math.pow(distX,2)+ Math.pow(distY, 2));
        return result;
    }

    function isValidNumber(num, x1, y1, x2, y2){
 
        if(Number.isInteger(num)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        }
        else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
     
        }
    }
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);