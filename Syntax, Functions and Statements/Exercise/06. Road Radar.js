function solve(arr){

    let area = arr[1];
    let speed = arr[0];

    if(area === 'city'){
        let limit = 50;
        let temp = speed - limit;
        
        if(speed <= limit){
            console.log();
        }else if(temp <= 20){
            console.log('speeding');
        } else if (temp <= 40){
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    } else if(area === 'residential'){
        let limit = 20;
        let temp = speed - limit;
        
        if(speed <= limit){
            console.log();
        }else if(temp <= 20){
            console.log('speeding');
        } else if (temp <= 40){
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        } 
    }   else if(area === 'interstate'){
            let limit = 90;
            let temp = speed - limit;
            
            if(speed <= limit){
                console.log();
            }else if(temp <= 20){
                console.log('speeding');
            } else if (temp <= 40){
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        } else if(area === 'motorway'){
            let limit = 130;
            let temp = speed - limit;
            
            if(speed <= limit){
                console.log();
            }else if(temp <= 20){
                console.log('speeding');
            } else if (temp <= 40){
                console.log('excessive speeding');
            } else {
                console.log('reckless driving');
            }
        }
}

solve([40, 'city']);
solve([20, 'residential']);
solve([200, 'motorway']);