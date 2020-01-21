function solve(){

    const db = {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: ['Nixon'],
        O: [],
        P: ['Peterson'],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: []
    };

    const dbIndex = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        I: 9,
        J: 10,
        K: 11,
        L: 12,
        M: 13,
        N: 14,
        O: 15,
        P: 16,
        Q: 17,
        R: 18,
        S: 19,
        T: 20,
        U: 21,
        V: 22,
        W: 23,
        X: 24,
        Y: 25,
        Z: 26
    };

    let btn = document.querySelector("#exercise > article > button").addEventListener('click', addToDB)

    function addToDB(){
        let input = document.querySelector("#exercise > article > input[type=text]").value;
        let firstLetter = input[0].toUpperCase();

        input = input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
        db[firstLetter].push(input);

        let listItems = document.querySelectorAll('ol li');
        listItems[dbIndex[firstLetter] - 1].textContent = db[firstLetter].join(', ');
    }
}