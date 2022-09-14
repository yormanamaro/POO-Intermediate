function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function deepCopy(subject) {
    let copySubject;
  
    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);
  
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
  }
  
  const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
      twitter: undefined,
      instagram: undefined,
      facebook: undefined,
    },
  };


  const yorman = deepCopy(studentBase);  // con esto creamos a cada uno de nuestros estudiantes
Object.defineProperty(yorman, "name", {  // con esta propiedad nos permite cambiar los atributos
   value: "yormancito",
   configurable: false,   // con esta opcion no nos permite eliminar algun atribito.
});


Object.seal(yorman); // con esta propiedad protegemos todos los elementos de nuestro objeto.
Object.isSealed(yorman); // con este validamos en consola con nustro objeto este protegido de modificaciones
