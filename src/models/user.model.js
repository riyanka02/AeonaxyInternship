export default class UserModel {

    constructor(name, username, email, password) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static checkIfUserExists(username) {
        return users.find((user)=> user.username == username)
    }

    static addUser(name, username, email, password){
        users.push(new UserModel(name, username, email, password));
    }

}

let users = [
    new UserModel('riyu', 'riyuriyu', 'riyu@email.com', '1234567'),
    new UserModel('piyu', 'piyupiyu', 'piyu@email.com', '7899876'),
]