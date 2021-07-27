import { User } from './user'
import {PhotoOrientation} from './photoOrientation';
import { Album } from './album'
import { Picture } from './picture'


const user = new User(1, 'markedOlive', 'Oliver', true);
const album = new Album(10, 'Platzi Pictures');
const picture = new Picture(1, 'TypeScript Course', '2021-01', PhotoOrientation.Landscape);
//Creamos relaciones entre los objetos
user.addAlbum(album);
album.addPicture(picture);

console.log('User:', user);