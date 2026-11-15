"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1 
class user {
    id;
    name;
    email;
    password;
    phone;
    age;
    Note;
    set setpassword(password) {
        this.password = password;
    }
    get getpassword() {
        return this.password;
    }
    displayinfo() {
        console.log(this.id + " " + this.name + " " + this.email + " " + this.phone + " " + this.age);
    }
    constructor(id, name, email, phone, age, notebook) {
        this.id = id;
        this.email = email;
        this.phone = phone;
        if (age < 18 || age > 60) {
            throw new Error("the age is invalid should be from 18 to 60");
        }
        else {
            this.age = age;
        }
        this.name = name;
        this.Note = notebook;
    }
}
//2
class Admin extends user {
    managenotes(notebook, note) {
        notebook.addnote(note);
    }
}
//3
class note {
    id;
    title;
    content;
    userid;
    author;
    preview() {
        return this.content.substring(0, 20);
    }
    constructor(id, title, content, userid, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userid = userid;
        this.author = author;
    }
}
//4
class notebook {
    Note = [];
    addnote(note) {
        this.Note.push(note);
    }
    removenote(note) {
        let index = this.Note.indexOf(note);
        if (index !== -1) {
            this.Note.splice(index, 1);
        }
    }
}
//7
class storage {
    item = [];
    additem(item) {
        this.item.push(item);
    }
    removeitem(item) {
        let index = this.item.indexOf(item);
        if (index !== -1) {
            this.item.splice(index, 1);
        }
    }
    get getallitems() {
        return this.item;
    }
}
