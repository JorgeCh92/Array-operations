//Head
const head = (array) => {
    const [first]= array;
    return first;
};

console.log('Head');
console.log(head(['coche', 'bus', 'tren', 'avión'])); //coche

//Tail
const tail = (array) => {
    const [first, ...rest]= array;
    return rest;
};

console.log('\nTail');
console.log(tail(["gato", "perro", "serpiente", "cocodrilo", "tortuga"])); //["perro", "serpiente", "cocodrilo", "tortuga"]

//Init
const init = (array) => {
    array.pop();
    return array;
};

console.log('\nInit');
console.log(init(["mesa", "silla", "sofá", "taburete"])); //["mesa", "silla", "sofá"]

//Last
const last = (array) => {
    return array.pop();
};

console.log('\nLast');
console.log(last(["Juan", "Pepe", "Luis", "Sofía", "María"])); //María