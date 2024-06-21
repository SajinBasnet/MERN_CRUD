import express from 'express'
import {Createuser,Getuser,GetuserById,Updateuser, Deleteuser} from '../controller/UserController.js'
const routers = express.Router()

routers.post('/create',Createuser)
routers.get('/get',Getuser)
routers.get('/get/:id',GetuserById)
routers.put('/update/:id',Updateuser)
routers.delete('/delete/:id',Deleteuser)
export default routers