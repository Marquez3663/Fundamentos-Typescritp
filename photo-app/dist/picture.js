"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("./item");
class Picture extends item_1.Item {
    constructor(id, title, _date, _orientation) {
        super(id, title);
        this._date = _date;
        this._orientation = _orientation;
    }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`;
    }
}
exports.Picture = Picture;
;
