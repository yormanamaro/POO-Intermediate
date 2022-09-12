
const juan = {
    name: "juannito",
    age: 18,
    approvedCourses: ["Curso1"],
    addCourses(newCourse) {      
        console.log("This", this);
        console.log("This.approveCourses", this.approvedCourses);        // Se crea un metodo que recibe un parametro
        this.approvedCourses.push(newCourse);                           // va a llamar a this que es nuestro objeto juan
    }
};


console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan)); 


Object.seal(juan);
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));




///////////////////////   JSON.parse y JSON.stringify   ///////////////////////////////////

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'AAAAAAAA'
    }
};

const stringifyComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifyComplexObj);






