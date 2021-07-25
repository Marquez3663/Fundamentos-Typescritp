// Orientacion para Fotografias
// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;

enum PhotoOrientation {
    Landscape = 0,//0
    Portrait = 1,//1
    Square = 2,//2
    Panorama = 3//3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

// Modificacion de la enumeracion de los elementos
enum PictureOrientation{
    Landscape = 10,
    Portrait,
    Square,
    Panorama
};

console.log('portrait', PictureOrientation.Portrait);

// Enumerado por medio de 'claves'
enum Country{
    Venezuela = 'ven',
    Mexico = 'mex',
    EEUU = 'usa',
    Bolivia = 'bol',
    Portugal = 'por'
}

const country: Country = Country.Bolivia;
console.log('country', country);