"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const photoOrientation_1 = require("./photoOrientation");
const album_1 = require("./album");
const picture_1 = require("./picture");
const user = new user_1.User(1, 'markedOlive', 'Oliver', true);
const album = new album_1.Album(10, 'Platzi Pictures');
const picture = new picture_1.Picture(1, 'TypeScript Course', '2021-01', photoOrientation_1.PhotoOrientation.Landscape);
//Creamos relaciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);
console.log('User:', user);
user.removeAlbum(album);
console.log('user', user);
