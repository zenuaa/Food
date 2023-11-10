'use strict'

const persone = {
    name: 'zenua',
    age: 34,
    tel: '+380939198508',
    married: [true,'Olga Bartash']
}

// const jsonObj = JSON.stringify(persone);
const clonePersone = JSON.parse(JSON.stringify(persone));

clonePersone.age = 35;

// console.log(jsonObj);
// console.log(clonePersone);
