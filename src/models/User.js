export class User {
    constructor(id = null, name, phone, mail) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.mail = mail;
    }

    static fromJson(data) {
        return new User(data.id, data.name, data.phhone, data.mail);
    }

    toString() {
        return JSON.stringify(this);
    }
}