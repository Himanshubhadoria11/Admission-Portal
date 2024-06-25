const CourseModel = require('../models/course')

class AdminController{

    static display = async (req,res)=>{
        try{
            const {name,email,image,id}=req.Udata
            const course =await CourseModel.find()
            res.render('admin/display',{n:name,i:image,c:course})

        }catch(error){
            console.log(error)
        }
    }


}
module.exports =AdminController