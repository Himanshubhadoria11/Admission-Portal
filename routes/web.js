const express = require('express')
const FrontController = require('../controller/FrontController')
const route = express.Router()
const checkUserAuth=require('../middleware/auth')
const CourseController = require('../controller/coursecontroller')
const AdminController = require('../controller/AdminController')


//routing path http://localhost:3000/ (/)
route.get('/', FrontController.login)
route.get('/register', FrontController.register)
route.get('/home',checkUserAuth, FrontController.home)
route.get('/about', checkUserAuth,FrontController.about)
route.get('/contact',checkUserAuth, FrontController.contact)

//course
route.post('/course_insert',checkUserAuth, CourseController.courseInsert)
route.get('/courseDisplay',checkUserAuth, CourseController.courseDisplay)


//admin controller
route.get('/admin/display',checkUserAuth, AdminController.display)
route.post('/admin/updateStatus/:id',checkUserAuth,AdminController.updateStatus)


//insert data
route.post('/userInsert', FrontController.UserInsert)
route.post('/verifyLogin', FrontController.verifyLogin)
route.get('/logout', FrontController.logout)


module.exports = route