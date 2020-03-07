class Vacation {
    constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = Number(budget);
        this.kids = {};
    }

    registerChild(name, grade, budget){
        if(budget >= this.budget){
            if(!this.kids.hasOwnProperty(grade)){
                this.kids[grade] = [];
                this.kids[grade].push({ [name]: budget} );
                return this.kids[grade].map(element => `${Object.keys(element)} - ${Object.keys(element)}`);
            } else {
                let checker = false;
                for (let students of this.kids[grade]) {
                    if (Object.keys(students).includes(name)) {
                        checker = true;
                    }
                }
 
                if (checker === false) {
                    this.kids[grade].push({ [name]: budget });
                    return this.kids[grade].map(element => `${Object.keys(element)}-${Object.values(element)}`);
                } else {
                    return `${name} is already in the list for this ${this.destination} vacation.`;
                }
            }
        } else {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
       }
    }

    removeChild(kidName, kidGrade){
        if(this.kids.hasOwnProperty(kidGrade)){
            for(let student of this.kids[kidGrade]){
                if(Object.keys(student).includes(kidName)){
                    let index = this.kids[kidGrade].indexOf(student);
                    this.kids[kidGrade].splice(1, index);

                    return this.kids[kidGrade].map(element => `${Object.keys(element)} - ${Object.values(element)}`);
                } else {
                    return `We couldn't find ${kidName} in ${kidGrade} grade.`;
                }
            }
        }
    }

    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
  
        Object.entries(this.kids).sort((a, b) => a[0] - b[0]);
  
        let output = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        for (const grade in this.kids) {
            output += `Grade: ${grade}\n`;
            let counter = 1;
            for (let test of this.kids[grade]) {
                output += `${counter++}. ${Object.keys(test)}-${Object.values(test)}\n`
            }
        }
  
        return output;
    }

    get numberOfChildren() {
        let counter = 0;
        for (let kvp in this.kids) {
            for (let kids of this.kids[kvp]) {
                if (kids !== "") {
                    counter++;
                }
            }
        }
  
        return counter;
    }
}

let vacation = new Vacation('Mr Pesho', 'San diego', 2000);
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Lilly', 6, 2100));
console.log(vacation.registerChild('Pesho', 6, 2400));
console.log(vacation.registerChild('Gosho', 5, 2000));
console.log(vacation.registerChild('Tanya', 5, 6000));
console.log(vacation.registerChild('Mitko', 10, 1590));