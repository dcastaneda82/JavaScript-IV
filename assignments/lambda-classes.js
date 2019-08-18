// CODE here for your Lambda Classes

class Person {
    constructor(properties) {
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
    }
    speak(){
        return `WhatSup, my name is ${this.name} I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor(properties) {
        super(properties);
        this.specialty = properties.specialty;
        this.favLanguage = properties.favLanguage;
        this.catchPhrase = properties.catchPhrase;

    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(properties){
        super(properties);
        this.previousBackground = properties.previousBackground;
        this.className = properties.className;
        this.favSubjects = properties.favSubjects;
    }
    listSubjects(){
        this.favSubjects.map(item => console.log(item));
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManagers extends Instructor {
    constructor(properties) {
        super(properties);
        this.gradClassName = properties.gradClassName;
        this.favInstructor = properties.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(studentOBJ, subject) {
        console.log(`${this.name} debugs ${studentOBJ.name}'s code on ${subject}.`);
    }
}

const instID1 = new Instructor ({
    name:'Pace',
    location: 'Austin, TX',
    age: 37,
    favLanguage: 'C++',
    specialty: 'Front-end',
    catchPhrase: 'To be or not to be...'
});

const instID2 = new Instructor ({
    name:'Karen',
    location: 'Richmond, VA',
    age: 23,
    specialty: 'Full-Stack',
    favLanguage: 'Javascript',
    catchPhrase: 'Yaba-daba-do!'
});

const instID3 = new Instructor ({
    name: 'Jan',
    location: 'Chicago, IL',
    age: 25,
    specialty: 'Back-end',
    favLanguage: 'Python',
    catchPhrase: 'Yogaba-gaba!'
});

const studID1 = new Student ({
    name: 'Tasha',
    age: 26,
    location: 'Steubenville, OH',
    previousBackground: 'Customer Service',
    className: 'WEBFT01',
    favSubjects: ['Full Stack', 'Android Dev']
});

const studID2 = new Student ({
    name: 'Daniel',
    age: 36,
    location: 'San Antonio, TX',
    previousBackground: 'Tech Support',
    className: 'WEBFT02',
    favSubjects: ['Full Stack', 'iOS Dev']
});

const studID3 = new Student ({
    name: 'Dwight',
    age: 45,
    location: 'Scranton, PA',
    previousBackground: 'Paper Salesman/Assistant to the Regional Manager',
    className: 'WEBFT03',
    favSubjects: ['UI Dev', 'Data Science']
});

const proManID1 = new ProjectManagers ({
    name: 'Michel',
    age: 56,
    location: 'Scranton, PA',
    specialty: 'UI',
    favLanguage: 'CSS',
    catchPhrase: 'Autobots, roll out!',
    gradClassName: 'UIFT10',
    favInstructor: `${instID2.name}`
});

const proManID2 = new ProjectManagers ({
    name: 'Jim',
    age: 33,
    location: 'Scranton, PA',
    specialty: 'Android Dev',
    favLanguage: 'C++',
    catchPhrase: 'You put your hands up on my hips!',
    gradClassName: 'UIFT10',
    favInstructor: `${instID1.name}`
});

const proManID3 = new ProjectManagers ({
    name: 'Pam',
    age: 31,
    location: 'Scranton, PA',
    specialty: 'iOS Dev',
    favLanguage: 'Javascript',
    catchPhrase: 'Autobots, roll out!',
    gradClassName: 'UIFT10',
    favInstructor: `${instID3.name}`
});

function introductions() {
    console.log(studID1.speak());
    console.log(studID2.speak());
    console.log(studID3.speak());
    console.log(studID1.speak());
    console.log(studID2.speak());
    console.log(studID3.speak());
    console.log(studID1.speak());
    console.log(studID2.speak());
    console.log(studID3.speak());
}

console.log(introductions());
console.log(instID1.demo('javasript'));
console.log(instID2.grade(studID3, 'Python'));
console.log(studID1.listSubjects());
console.log(studID2.PRAssignment('Full Stack'));
console.log(studID3.sprintChallenge('Data Science'));
console.log(proManID1.standUp('WebFT01'));
console.log(proManID2.debugsCode(studID3, 'UI Dev'));
