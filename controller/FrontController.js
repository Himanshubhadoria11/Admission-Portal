const UserModel = require('../models/user')
const TeacherModel = require('../models/Teacher')
const bcrypt = require('bcrypt')
const cloudinary = require('cloudinary')


cloudinary.config({
    cloud_name: 'dskp0nrq3',
    api_key: '232921997337532',
    api_secret: 'FlPN1cSHj9wjHygcRNT_eCM4KdY'
});


class FrontController {

    static login = async (req, res) => {
        try {
            res.render("login", { msg: req.flash('error') })     //render
        } catch (error) {
            console.log(error)
        }
    }

    static register = async (req, res) => {
        try {
            res.render("register", { msg: req.flash('error') })
        } catch (error) {
            console.log(error)
        }
    }
    static home = async (req, res) => {
        try {
            res.render("home")
        } catch (error) {
            console.log(error)
        }
    }
    static about = async (req, res) => {
        try {
            res.render("about")
        } catch (error) {
            console.log(error)
        }
    }
    static contact = async (req, res) => {
        try {
            res.render("contact")
        } catch (error) {
            console.log(error)
        }
    }
    static verifyLogin = async (req, res) => {
        try {
            // console.log(req.body)
            const { email, password } = req.body //input name="email"
            const user = await UserModel.findOne({ email: email })
            //console.log(user)
            if (user != null) {
                const isMatched = await bcrypt.compare(password , user.password)
                if (isMatched) {
                    res.redirect('/home')

                } else {
                    req.flash('error', 'Email or password is not valid')
                    res.redirect('/')
                
                }
            } else {

                req.flash('error', 'You are not a registered user')
                res.redirect('/')

            }

        } catch (error) {
            console.log(error)
        }
    }

    static logout = async (req, res) => {
        try {
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
    }


    //userinsert
    static UserInsert = async (req, res) => {
        try {
           // console.log(req.files.image)
            const file = req.files.image
            const imageUpload = await cloudinary.uploader.upload(file.tempFilePath,{
                folder: "userprofile",
            })
            console.log(imageUpload)
           
            // console.log("hello insert")
            console.log(req.body)
            const { n, e, p, cp } = req.body
            const user = await UserModel.findOne({ email: e })
            console.log(user)
            if (user) {
                req.flash('error', 'Email Already Exists')
                res.redirect('/register') //route path
            } else {
                if (n && e && p && cp) {
                    if (p == cp) {
                        const hashPassword = await bcrypt.hash(p,10); 
                        const result = new UserModel({
                            name: n,
                            email: e,
                            password: hashPassword,
                            image:{
                                public_id:imageUpload.public_id,
                                url:imageUpload.secure_url
                            }

                        })
                        await result.save()
                        res.redirect('/')
                    } else {
                        req.flash('error', 'Password not Match')
                        res.redirect('/register') //route path

                    }
                } else {
                    req.flash('error', 'All Fields Are Required')
                    res.redirect('/register') //route path

                }
            }
        } catch (error) {
            console.log(error)
        }
    }
}





module.exports = FrontController