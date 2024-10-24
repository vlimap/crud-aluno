var validator = require('validator');

let nome = ".";
let email = "";
let data = "24/10/2024";
let descricao = "teste";
let telefone = "99999999";
let moeda = "R$ 2,00";
console.log(validator.isEmpty(nome));
console.log(validator.isEmail(email));
console.log(validator.isDate(data,{format:"DD/MM/YYYY"}));
console.log(validator.isLength(descricao, {min:2, max:4}));
console.log(validator.isMobilePhone(telefone,'pt-BR'));
console.log(validator.isISO4217(moeda));


