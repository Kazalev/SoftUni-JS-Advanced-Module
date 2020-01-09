function solve(steps, length, speed){

    let distance = steps * length;
    let time = Math.ceil(distance / (speed * 1000 / 3600) + Math.floor(distance / 500) * 60);
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - hours*3600 - minutes*60;
    console.log(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
}

solve(4000, 0.60, 5);