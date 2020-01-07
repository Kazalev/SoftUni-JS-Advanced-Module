function solve(text){

    if(text === 'Mondey'){
        console.log(1);
    } else if(text === 'Tuesday'){
        console.log(2);
    } else if(text === 'Wednesday'){
        console.log(3);
    } else if(text === 'Thursday'){
        console.log(4);
    } else if(text === 'Friday'){
        console.log(5);
    } else if(text === 'Saturday'){
        console.log(6);
    } else if(text === 'Sunday'){
        console.log(7);
    } else {
        console.log('error');
    }
}

solve("Mondey"),
solve('Friday'),
solve('Invalid');