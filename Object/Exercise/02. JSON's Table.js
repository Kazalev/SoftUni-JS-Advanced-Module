function solve(input){

    console.log(`<table>`);

    for(let i = 0; i < input.length; i++){
        let currentLine = JSON.parse(input[i]);

        let name = currentLine.name;
        let position = currentLine.position;
        let salary = Number(currentLine.salary);

        console.log(`   <tr>`);
        console.log(`       <td>${name}</td>\n      <td>${position}</td>\n      <td>${salary}</td>`);
        console.log(`   </tr>`);
    }

    console.log(`</table>`);
}

solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ]);