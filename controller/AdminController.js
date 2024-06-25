const CourseModel = require('../models/course')

class AdminController{

    static display = async (req,res)=>{
        try{
            const {name,email,image,id}=req.Udata
            const course =await CourseModel.find()
            res.render('admin/display',{n:name,i:image,c:course,msg:req.flash('success')})

        }catch(error){
            console.log(error)
        }
    }
    static updateStatus = async (req,res)=>{
        try{
            //console.log(req.body)
            const update = await CourseModel.findByIdAndUpdate(req.params.id,{
                status:req.body.status,
                comment:req.body.comment
            })
            req.flash("success", "Status Update Successfully")
            res.redirect('/admin/display')

        }catch(error){
            console.log(error)
        }
    }


}
module.exports =AdminController