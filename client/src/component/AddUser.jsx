import axios from 'axios'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function AddUser() {
 
    const [value,setValue]=useState({
        name:"",
        age:"",
        email:"",
        phone:""
    })

    const handleChange=(e)=>{
        setValue({
            ...value,
            [e.target.name]:e.target.value
        })
    }

const handleSubmit=async(e)=>{
    e.preventDefault()

    try{
        const addUser= await axios.post('http://localhost:4000/api/create',value)
        const response=addUser.data
        if(response.success){
            toast.success(response.Message)
        }
       // console.log(response)
    }catch(error){
        console.log(error)
    }
    console.log(value)
}

  return (
    <>
      <div className="modal fade" id="addUserModal">
  <div className="modal-dialog">
    <div className="modal-content">
    <form onSubmit={handleSubmit}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="form-group">
        <label>Name</label>
        <input type='text' className='form-control' name='name' value={value.name} onChange={handleChange}/>
        </div>
        <div className="form-group">
        <label>Age</label>
        <input type='text' className='form-control' name='age' value={value.age} onChange={handleChange}/>
        </div>

         <div className="form-group">
        <label>Email</label>
        <input type='text' className='form-control' name='email' value={value.email} onChange={handleChange}/>
        </div>
         <div className="form-group">
        <label>Phone</label>
        <input type='text' className='form-control' name='phone' value={value.phone} onChange={handleChange}/>
        </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Add</button>
      </div>
    </form>
    </div>
  </div>
</div>
    </>
  )
}
