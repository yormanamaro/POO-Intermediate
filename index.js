//////// Class Curso Intermedio de P.O.O JS //////////

///// static en Java Script ///


class Patito {                    // se crea una clase normal
    static sonidito = "cuak";     // se le agrega static
};

console.log(Patito.sonidito);



// Lo mismo con los metodos:

class Patito {
    static hacerSonidito() {     // Creando un metodo
        return "cuak";           // todo metodo siempre lleva un retruns
    };
};

console.log(Patito.hacerSonidito());



// Aplicando el static en el prototipo object

const objetito = {               // en este caso creamos un objeto
    name: "Yorman",              // propiedades de nuestro objeto
    email: "yorman@platzi.com",
    age: 35,
};

Object.keys(objetito);           // devuelve todos los elementos en cadena de texto (array)

const objetito1 = {              
    name: "Yorman",
    email: "yorman@platzi.com",
    age: 35,
};

Object.getOwnPropertyNames(objetito1); // igual que el anterior pero usando otro prototipo object


Object.keys(objetito);           // devuelve todos los elementos en cadena de texto (array)

const objetito2 = {              
    name: "Yorman",
    email: "yorman@platzi.com",
    age: 35,
};

Object.entries(objetito2);          // en este caso regresa un array de array ordena todos los elementos casa uno en arrays


Object.keys(objetito);           // devuelve todos los elementos en cadena de texto (array)


const objetito3 = {              
    name: "Yorman",
    email: "yorman@platzi.com",
    age: 35,
};

Object.getOwnPropertyDescriptors(objetito3);

