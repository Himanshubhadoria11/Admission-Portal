const express = require('express')
const FrontController = require('../controller/FrontController')
const route = express.Router()
const checkUserAuth=require('../middleware/auth')

//routing path http://localhost:3000/ (/)
route.get('/', FrontController.login)
route.get('/register', FrontController.register)
route.get('/home',checkUserAuth, FrontController.home)
route.get('/about', checkUserAuth,FrontController.about)
route.get('/contact',checkUserAuth, FrontController.contact)



//insert data
route.post('/userInsert', FrontController.UserInsert)
route.post('/verifyLogin', FrontController.verifyLogin)
route.get('/logout', FrontController.logout)


module.exports = route