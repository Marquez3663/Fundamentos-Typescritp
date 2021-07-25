"use strict";
// Crear una Fotografia 
// function createPicture(title, date, size) {
// //title
// };
//Usamos TS,definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize){
//     //Se crea la Fotografia
//     console.log('create Picture using', title, date, size);
// };
createPicture('My Birthday', '2021-25-07', '500x500');
// createPicture('Colombia Trip', '2021-02-02');
//Parametros opcionales en funciones
function createPicture(title, date, size) {
    //Se crea la Fotografia
    console.log('create Picture using', title, date, size);
}
;
createPicture('My Birthday', '2021-25-07', '500x500');
createPicture('Colombia Trip', '2021-02-02');
createPicture('Bangladesh');
createPicture();
//Flat Array Function
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size
    };
    return { title: title, date: date, size: size };
};
var picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture);
