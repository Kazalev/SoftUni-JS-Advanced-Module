class Computer {
    constructor(ramMemory, cpuGHz, hddMemory){
        this.ramMemory = +ramMemory;
        this.cpuGHz = +cpuGHz;
        this.hddMemory = +hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }
    
    installAProgram(name, requiredSpace){
        if(this.hddMemory < requiredSpace){
            throw new Error('There is not enough space on the hard drive');
        }
        
        let newProgram = {
            name,
            requiredSpace
        }

        this.installedPrograms.push(newProgram);
        this.hddMemory -= requiredSpace;

        return newProgram;
    }

    // uninstallAProgram(name){
    //     for(let i = 0; i <= this.installedPrograms; i++){
    //         if(installedPrograms[i].name === name){
    //             this.installedPrograms.splice(i, 1);
    //             this.hddMemory -= this.installedPrograms[i].requiredSpace;
    //             return this.installedPrograms;
    //         }
    //     }

    //     throw new Error('Control panel is not responding');
    // }

    uninstallAProgram(name) {
        let index = this.installedPrograms.findIndex(progr => progr.name === name);
 
        if (index === -1) {
            throw new Error('Control panel is not responding')
        }
 
        this.hddMemory += this.installedPrograms[index].requiredSpace;
        this.installedPrograms.splice(index, 1);
 
        return this.installedPrograms;
    }

    openAProgram(name){
        let indexInInstalledPrograms = this.installedPrograms.findIndex(progr => progr.name === name);
        let indexInOpenPrograms = this.taskManager.findIndex(progr => progr.name === name);

        if(indexInInstalledPrograms === -1){
            throw new Error(`The ${name} is not recognized`);
        }

        if(indexInOpenPrograms === -1){
            throw new Error(`The ${name} is already open`);
        }

        let ramUsage = (this.installedPrograms[indexInInstalledPrograms].requiredSpace / this.ramMemory) * 1.5;
        let cpuUsage = ((this.installedPrograms[indexInInstalledPrograms].requiredSpace / this.cpuGHz) / 500) * 1.5;

        let currentProgram = {
            name,
            ramUsage,
            cpuUsage,
        }
 
        let usedRamMemory = this.taskManager.reduce((a, b) => (a + b.ramUsage), 0);
        let usedCPU = this.taskManager.reduce((a, b) => (a + b.cpuUsage), 0);
 
        if (ramUsage + usedRamMemory >= 100) {
            throw new Error(`${name} caused out of memory exception}`)
        }
 
        if (cpuUsage + usedCPU >= 100) {
            throw new Error(`${name} caused out of cpu exception}`)
        }
        this.taskManager.push(currentProgram);
 
        return currentProgram;
    }

    taskManagerView() {
        //test 14
        if (this.taskManager.length === 0) {
            return 'All running smooth so far'
        }
        //test15
        return this.taskManager
        .map(progr => `Name - ${progr.name} | Usage - CPU: ${progr.cpuUsage.toFixed(0)}%, RAM: ${progr.ramUsage.toFixed(0)}%`)
        .join('\n')
    }
}

let computer = new Computer(4096, 7.5, 250000);

computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.uninstallAProgram('Word');
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Excel');
computer.openAProgram('Solitare');
console.log(computer.installedPrograms);
console.log(('-').repeat(50)) // Separator
console.log(computer.taskManager);