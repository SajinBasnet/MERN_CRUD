import mongoose  from "mongoose";

const dbCon=async()=>{

    try{
       await mongoose.connect(process.env.DB_URL)
        console.log('Database Connected')

    }catch(error){
      console.log('Connection failed')        

    }
}

export default dbCon