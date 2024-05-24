const express = require('express')
const FrontController = require('../controller/FrontController')
const route = express.Router()

//routing path http://localhost:3000/ (/)
route.get('/', FrontController.login)
route.get('/register', FrontController.register)
route.get('/home', FrontController.home)
route.get('/about', FrontController.about)
route.get('/contact', FrontController.contact)



//insert data
route.post('/userInsert', FrontController.UserInsert)
route.post('/verifyLogin', FrontController.verifyLogin)
route.get('/logout', FrontController.logout)


module.exports = route