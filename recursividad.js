function resursiva(numerito) {
    if (/*validacion*/) {
        //llamados recursivos
    } else {
        // llamados normales, sin recursividad
    }
}


const numeritoss = [0,1,2,3,4,5,5,6,7,8,9,435678,7,2,3];
let numerito = 0;
for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritoss[index];
    console.log({index, numerito });    
};

// con funcion recursiva:

const numeritos = [0,1,2,3,4,5,5,6,7,8,9,435678,7,2,3];
function recursiva(numbersArray) {
    if (numbersArray.length != 0) {
      const firstNum = numbersArray[0];
      console.log(firstNum);
  
      numbersArray.shift();
      recursiva(numbersArray);
    }
  }

///////////////////////////// Deep copy con Recursividad /////////////////////////


const objp = {
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

function isObject(subject) {
    return typeof subject == "object"  // para validar si lo que se esta pasando es un objeto
};

function inArray(subject) {
    return Array.isArray(subject); // para validar si es un array
};


function deppCopy(subject) {
    let copySubject;

    const subjectIsObject = isObject(subject);  //para preguntar si es array u objeto
    const subjectIsArray = isArray(subject);   // preguntar si es array u objeto

    if (subjectIsArray) {
        copySubject = [];
    } else if (subjectIsObject) {
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);
    
        if (keyIsObject) {
          copySubject[key] = deepCopy(subject[key]);
        } else {
          if (subjectIsArray) {
            copySubject.push(subject[key]);
          } else {
            copySubject[key] = subject[key];
          }
        }
      }

    return copySubject;
};