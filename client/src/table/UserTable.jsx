import { useState } from "react"
import Table from '../component/Table'
import axios from 'axios'
import AddUser from '../component/AddUser'
import UpdateUser from '../component/UpdateUser'
import DeleteUser from '../component/DeleteUser'
import toast from "react-hot-toast"

export default function UserTable() {
   const [value,setValue] = useState({
        name:'',
        age:'',
        email:'',
        phone:''
    });

    const [updateid,setUpdateid]=useState()
    const [deleteid,setDeleteid]=useState()
    //const [userdata,setUserData] = useState()
 const handleChange=(e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        });
    };

 const handleSubmit= async(e)=>{

        e.preventDefault()
       try {
        const updateUser= await axios.put(`http://localhost:4000/api/update/${updateid}`,value)
        const response = updateUser.data
         if(response.success){
            toast.success(response.message)
        }

        //console.log(response)
       } catch (error) {
         console.log(error)
       }
    };

  const updateUserById=async(id)=>{
     try{
       const fetchUser = await axios.get(`http://localhost:4000/api/get/${id}`)
      const response = fetchUser.data
      //console.log(response)
     setValue(response.getUser);
     }catch(error){
        console.log(error)
     }

    setUpdateid(id)
     //alert(id)
  };


const handleDelete= async(e)=>{

        e.preventDefault()
       try {
        const deleteUser= await axios.delete(`http://localhost:4000/api/delete/${deleteid}`)
        const response = deleteUser.data
         if(response.success){
            toast.success(response.message)
        }

        //console.log(response)
       } catch (error) {
         console.log(error)
       }
    };


   const deleteUserById=(id)=>{
    setDeleteid(id)
     //alert(id)
  };



  return (
    <>
    <Table updateUserById={updateUserById} deleteUserById={deleteUserById} />
    <AddUser/>
    <UpdateUser value={value} handleChange={handleChange} handleSubmit={handleSubmit} ></UpdateUser>
    <DeleteUser handleDelete={handleDelete} />
    </>
  )
}
