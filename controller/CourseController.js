const CourseModel =require('../models/course')

class CourseController{

    static courseInsert =async(req,res)=>{
        try{
            //console.log(req.body)
            const{name,email,phone,dob,address,gender,education,course}
            =req.body
            const result =new CourseModel({
                name:name,
                email:email,
                phone:phone,
                dob:dob,
                address:address,
                gender:gender,
                education:education,
                course:course
            })
            await result.save()
            res.redirect('/courseDisplay')
        }catch(error){
            console.log(error)
        }

    }


static courseDisplay =async(req,res)=>{
    try{
        const {name,email,image} =req.Udata
         res.render('course/display',{n:name,i:image})
        }catch(error){
            console.log(error)
        }
  }
}

module.exports=CourseController