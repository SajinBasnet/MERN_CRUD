import UserModels from "../models/User.js"

const Createuser=async(req,res)=>{
  //res.send('Hello from create api')
  try{
   const{name,age,email,phone}=req.body

   const newUser = new UserModels({
    name,age,email,phone
   })
   await newUser.save()
   res.status(200).json({success:true,Message:'User Created Successfully',newUser})
}catch(error){
res.status(500).json({success:false,Message:'Internal Server Error',newUser})

}

}


const Getuser=async(req,res)=>{

    try{
        const user = await UserModels.find()
        if(!user){
            return res.status(404).json({success:false,message:'User Not Found'})
        }
         res.status(200).json({success:true,user})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:'Internal Server Error'})
    }
}

const Updateuser=async(req,res)=>{
    try{
       const UserId = req.params.id
        const updatedUser = await UserModels.findByIdAndUpdate(UserId,req.body,{new:true})
        if(!updatedUser){
            return res.status(404).json({success:false,message:'User Not Found'})
        }
         res.status(200).json({success:true,message:'User updated successfully',updatedUser})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:'Internal Server Error'})
    }
}

const GetuserById = async(req,res)=>{
    try{
       const UserId = req.params.id
        const getUser = await UserModels.findById(UserId)
        if(!getUser){
            return res.status(404).json({success:false,message:'User Not Found'})
        }
         res.status(200).json({success:true,message:'User found successfully',getUser})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:'Internal Server Error'})
    }
}

const Deleteuser= async (req,res)=>{
    try{
         const UserId = req.params.id
        const deletedUser = await UserModels.findByIdAndDelete(UserId)
        if(!deletedUser){
            return res.status(404).json({success:false,message:'User Not Found'})
        }
        res.status(200).json({success:true,message:'User deleted successfully'})
    }
    catch(error){
        console.log(error)
         return res.status(500).json({success:false,message:'Internal Server Error'})
    }
}

export {Createuser,Getuser,GetuserById,Updateuser,Deleteuser}