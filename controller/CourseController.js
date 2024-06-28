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
                course:course,
                user_id : req.Udata.id
            })
            await result.save()
            res.redirect('/courseDisplay')
        }catch(error){
            console.log(error)
        }

    }


static courseDisplay =async(req,res)=>{
    try{
        const {name,email,image,id} =req.Udata
        const course =await CourseModel.find({user_id:id})
       // console.log(course)
         res.render('course/display',{n:name,i:image,c:course})
        }catch(error){
            console.log(error)
        }
  }

  static courseView =async(req,res)=>{
    try{
        const {name,image,id} =req.Udata
        const courseview =await CourseModel.findById(req.params.id)
        //console.log(courseview)
         res.render('course/view',{n:name,i:image,c:courseview})
        }catch(error){
            console.log(error)
        }
  }

  static courseEdit =async(req,res)=>{
    try{
        const {name,image,email,id} =req.Udata
        const courseview =await CourseModel.findById(req.params.id)
        //console.log(courseview)
         res.render('course/edit',{n:name,i:image,e:email,c:courseview})
        }catch(error){
            console.log(error)
        }
  }
  static courseUpdate = async (req, res) => {
    try {
        
        const { name, email, phone, dob, address, gender, education, course } = req.body
        const courseview =await CourseModel.findByIdAndUpdate(req.params.id,{
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            address: address,
            gender: gender,
            education: education,
            course: course,
})
        res.redirect('/courseDisplay')
      

    } catch (error) {
        console.log(error)
    }
}
}

module.exports=CourseController