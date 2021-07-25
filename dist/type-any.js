// Tipo explicito
var idUser;
idUser = 1;
idUser = 1; //Number
idUser = "1"; //String
console.log('idUser', idUser);
// Tipo inferido 
var otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);
var surprise = 'hello typescript';
// surprise.sayHello();//Error
var res = surprise.substring(6); // Error
console.log('res', res);
