// Crear una Fotografia 
// function createPicture(title, date, size) {
// //title
// };

type SquareSize = '100x100'| '500x500' | '1000x1000';

//Usamos TS,definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize){
//     //Se crea la Fotografia
//     console.log('create Picture using', title, date, size);
// };

createPicture('My Birthday', '2021-25-07', '500x500');
// createPicture('Colombia Trip', '2021-02-02');

//Parametros opcionales en funciones
function createPicture(title?: string, date?: string, size?: SquareSize){
    //Se crea la Fotografia
    console.log('create Picture using', title, date, size);
};

createPicture('My Birthday', '2021-25-07', '500x500');
createPicture('Colombia Trip', '2021-02-02');
createPicture('Bangladesh');
createPicture();

//Flat Array Function
let createPic = (title: string, date: string, size: SquareSize):object =>{
    return{
        title: title,
        date: date,
        size: size
    };
    return{ title, date, size };
};
const picture = createPic('Platzi session', '2020-03-10', '100x100');
console.log('picture', picture)