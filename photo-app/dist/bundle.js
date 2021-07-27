(()=>{"use strict";var e={987:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Album=void 0;const i=r(123);class s extends i.Item{constructor(e,t){super(e,t),this.picture=[]}addPicture(e){this.picture.push(e)}}t.Album=s},123:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0,t.Item=class{constructor(e,t){this.id=e,this.title=t}}},909:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PhotoOrientation=void 0,(r=t.PhotoOrientation||(t.PhotoOrientation={}))[r.Landscape=0]="Landscape",r[r.Portrait=1]="Portrait",r[r.Square=2]="Square",r[r.Panorama=3]="Panorama"},449:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Picture=void 0;const i=r(123);class s extends i.Item{constructor(e,t,r,i){super(e,t),this._date=r,this._orientation=i}toString(){return`[id: ${this.id}, title: ${this.title}, orientation: ${this._orientation}]`}}t.Picture=s},536:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.User=void 0,t.User=class{constructor(e,t,r,i){this.id=e,this.username=t,this.firstName=r,this.isPro=i,this.album=[]}addAlbum(e){this.album.push(e)}removeAlbum(e){const t=this.album.findIndex((t=>t.id===e.id));let r;return t>=0&&(r=this.album[t],this.album.splice(t,1)),r}}}},t={};function r(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,r),o.exports}(()=>{const e=r(536),t=r(909),i=r(987),s=r(449),o=new e.User(1,"markedOlive","Oliver",!0),a=new i.Album(10,"Platzi Pictures"),n=new s.Picture(1,"TypeScript Course","2021-01",t.PhotoOrientation.Landscape);o.addAlbum(a),a.addPicture(n),console.log("User:",o),o.removeAlbum(a),console.log("user",o)})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ2pCcUIsUUFBUUMsSUFBSSxPQUFRSCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGhvdG8tYXBwLy4vc3JjL2FsYnVtLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9pdGVtLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9waG90b09yaWVudGF0aW9uLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy9waWN0dXJlLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC8uL3NyYy91c2VyLnRzIiwid2VicGFjazovL3Bob3RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waG90by1hcHAvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQWxidW0gPSB2b2lkIDA7XG5jb25zdCBpdGVtXzEgPSByZXF1aXJlKFwiLi9pdGVtXCIpO1xuY2xhc3MgQWxidW0gZXh0ZW5kcyBpdGVtXzEuSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlKSB7XG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XG4gICAgICAgIHRoaXMucGljdHVyZSA9IFtdO1xuICAgIH1cbiAgICA7XG4gICAgYWRkUGljdHVyZShwaWN0dXJlKSB7XG4gICAgICAgIHRoaXMucGljdHVyZS5wdXNoKHBpY3R1cmUpO1xuICAgIH1cbiAgICA7XG59XG5leHBvcnRzLkFsYnVtID0gQWxidW07XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSXRlbSA9IHZvaWQgMDtcbmNsYXNzIEl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSkge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG59XG5leHBvcnRzLkl0ZW0gPSBJdGVtO1xuO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBob3RvT3JpZW50YXRpb24gPSB2b2lkIDA7XG52YXIgUGhvdG9PcmllbnRhdGlvbjtcbihmdW5jdGlvbiAoUGhvdG9PcmllbnRhdGlvbikge1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIkxhbmRzY2FwZVwiXSA9IDBdID0gXCJMYW5kc2NhcGVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQb3J0cmFpdFwiXSA9IDFdID0gXCJQb3J0cmFpdFwiO1xuICAgIFBob3RvT3JpZW50YXRpb25bUGhvdG9PcmllbnRhdGlvbltcIlNxdWFyZVwiXSA9IDJdID0gXCJTcXVhcmVcIjtcbiAgICBQaG90b09yaWVudGF0aW9uW1Bob3RvT3JpZW50YXRpb25bXCJQYW5vcmFtYVwiXSA9IDNdID0gXCJQYW5vcmFtYVwiO1xufSkoUGhvdG9PcmllbnRhdGlvbiA9IGV4cG9ydHMuUGhvdG9PcmllbnRhdGlvbiB8fCAoZXhwb3J0cy5QaG90b09yaWVudGF0aW9uID0ge30pKTtcbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QaWN0dXJlID0gdm9pZCAwO1xuY29uc3QgaXRlbV8xID0gcmVxdWlyZShcIi4vaXRlbVwiKTtcbmNsYXNzIFBpY3R1cmUgZXh0ZW5kcyBpdGVtXzEuSXRlbSB7XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBfZGF0ZSwgX29yaWVudGF0aW9uKSB7XG4gICAgICAgIHN1cGVyKGlkLCB0aXRsZSk7XG4gICAgICAgIHRoaXMuX2RhdGUgPSBfZGF0ZTtcbiAgICAgICAgdGhpcy5fb3JpZW50YXRpb24gPSBfb3JpZW50YXRpb247XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFtpZDogJHt0aGlzLmlkfSwgdGl0bGU6ICR7dGhpcy50aXRsZX0sIG9yaWVudGF0aW9uOiAke3RoaXMuX29yaWVudGF0aW9ufV1gO1xuICAgIH1cbn1cbmV4cG9ydHMuUGljdHVyZSA9IFBpY3R1cmU7XG47XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVXNlciA9IHZvaWQgMDtcbmNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB1c2VybmFtZSwgZmlyc3ROYW1lLCBpc1Bybykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMuaXNQcm8gPSBpc1BybztcbiAgICAgICAgdGhpcy5hbGJ1bSA9IFtdO1xuICAgIH1cbiAgICA7XG4gICAgYWRkQWxidW0oYWxidW0pIHtcbiAgICAgICAgdGhpcy5hbGJ1bS5wdXNoKGFsYnVtKTtcbiAgICB9XG4gICAgO1xuICAgIHJlbW92ZUFsYnVtKGFsYnVtKSB7XG4gICAgICAgIC8vQnVzY2FyIEFsYnVtXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5hbGJ1bS5maW5kSW5kZXgoYSA9PiBhLmlkID09PSBhbGJ1bS5pZCk7XG4gICAgICAgIGxldCBkZWxldGVkQWxidW07XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICBkZWxldGVkQWxidW0gPSB0aGlzLmFsYnVtW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuYWxidW0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVsZXRlZEFsYnVtO1xuICAgIH1cbn1cbmV4cG9ydHMuVXNlciA9IFVzZXI7XG47XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1c2VyXzEgPSByZXF1aXJlKFwiLi91c2VyXCIpO1xuY29uc3QgcGhvdG9PcmllbnRhdGlvbl8xID0gcmVxdWlyZShcIi4vcGhvdG9PcmllbnRhdGlvblwiKTtcbmNvbnN0IGFsYnVtXzEgPSByZXF1aXJlKFwiLi9hbGJ1bVwiKTtcbmNvbnN0IHBpY3R1cmVfMSA9IHJlcXVpcmUoXCIuL3BpY3R1cmVcIik7XG5jb25zdCB1c2VyID0gbmV3IHVzZXJfMS5Vc2VyKDEsICdtYXJrZWRPbGl2ZScsICdPbGl2ZXInLCB0cnVlKTtcbmNvbnN0IGFsYnVtID0gbmV3IGFsYnVtXzEuQWxidW0oMTAsICdQbGF0emkgUGljdHVyZXMnKTtcbmNvbnN0IHBpY3R1cmUgPSBuZXcgcGljdHVyZV8xLlBpY3R1cmUoMSwgJ1R5cGVTY3JpcHQgQ291cnNlJywgJzIwMjEtMDEnLCBwaG90b09yaWVudGF0aW9uXzEuUGhvdG9PcmllbnRhdGlvbi5MYW5kc2NhcGUpO1xuLy9DcmVhbW9zIHJlbGFjaW9uZXMgZW50cmUgbG9zIG9iamV0b3NcbnVzZXIuYWRkQWxidW0oYWxidW0pO1xuYWxidW0uYWRkUGljdHVyZShwaWN0dXJlKTtcbmNvbnNvbGUubG9nKCdVc2VyOicsIHVzZXIpO1xudXNlci5yZW1vdmVBbGJ1bShhbGJ1bSk7XG5jb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiQWxidW0iLCJpdGVtXzEiLCJJdGVtIiwiY29uc3RydWN0b3IiLCJpZCIsInRpdGxlIiwic3VwZXIiLCJ0aGlzIiwicGljdHVyZSIsImFkZFBpY3R1cmUiLCJwdXNoIiwiUGhvdG9PcmllbnRhdGlvbiIsIlBpY3R1cmUiLCJfZGF0ZSIsIl9vcmllbnRhdGlvbiIsInRvU3RyaW5nIiwiVXNlciIsInVzZXJuYW1lIiwiZmlyc3ROYW1lIiwiaXNQcm8iLCJhbGJ1bSIsImFkZEFsYnVtIiwicmVtb3ZlQWxidW0iLCJpbmRleCIsImZpbmRJbmRleCIsImEiLCJkZWxldGVkQWxidW0iLCJzcGxpY2UiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwidXNlcl8xIiwicGhvdG9PcmllbnRhdGlvbl8xIiwiYWxidW1fMSIsInBpY3R1cmVfMSIsInVzZXIiLCJMYW5kc2NhcGUiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==