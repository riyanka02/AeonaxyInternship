import UserModel from "../models/user.model.js";

export default class UserController {

    getRegistrationPage(req, res) {
        return res.render('index.ejs', {'userAlreadyExists': false});
    }

    postRegistrationPage(req, res) {
        console.log(req.body);
        const { input4name, input4username, input4email, input4password } = req.body;
        const result = UserModel.checkIfUserExists(input4username);
        if (!result) {
            UserModel.addUser(input4name, input4username, input4email, input4password);
            return res.render("page2.ejs")
        } else {
            return res.render("index.ejs", {'userAlreadyExists': true});
        }
    }

    gotoPage3(req, res){
        return res.render('page3.ejs');
    }
    gotoPage4(req, res){
        return res.render('page4.ejs');

    }
    gotolastpage(req,res){
        return res.render('page6.ejs');
    }
    
}

