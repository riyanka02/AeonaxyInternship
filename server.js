import express, {urlencoded} from 'express'
import {resolve} from 'node:path'

import UserController from './src/controllers/user.controller.js';
const app = express()
const port = 3500

app.set('view engine', 'ejs');
app.set('views', resolve('src', 'views'))

app.use(urlencoded({extended:true}))
app.use(express.static('public'))

const userController = new UserController()

app.get('/', userController.getRegistrationPage);
app.post('/', userController.postRegistrationPage);
app.get('/page3', userController.gotoPage3)
app.get('/page4', userController.gotoPage4)
app.get('/lastpage', userController.gotolastpage)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})