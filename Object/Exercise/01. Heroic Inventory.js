function solve(arr){

    let heroData = [];

    for(let i = 0; i < arr.length; i++){
        let currentHeroArguments = arr[i].split(' / ');
        
        let currentHeroName = currentHeroArguments[0];
        let currentHeroLevel = Number(currentHeroArguments[1]);
        let currentHeroItems = [];
            if(currentHeroArguments.length > 2){
                currentHeroItems = currentHeroArguments[2].split(', ');
            }
        
        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };

        heroData.push(hero);
    }

    console.log(JSON.stringify(heroData));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

solve(['Jake / 1000 / Gauss, HolidayGrenade']);


function solve2(input){

    let heroes = [];

    for(let line of input){
        let [name, level, items] = line.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroes.push({name, level, items});
    }

    console.log(JSON.stringify(heroes));
}

solve2(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);