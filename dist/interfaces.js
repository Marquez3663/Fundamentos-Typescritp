"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
function showPicture(picture) {
    console.log("[title: " + picture.title + ",\n         date:" + picture.date + ",\n        orientation: " + picture.orientation + "]");
}
;
var myPic = {
    title: 'Test Title',
    date: '2021-07',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test title',
    date: '2020-02',
    orientation: PhotoOrientation.Portrait,
    // extra:'test'// Error
});
