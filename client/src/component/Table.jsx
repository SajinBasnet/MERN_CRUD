import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Table({updateUserById, deleteUserById}) {
 const [data,setData]=useState([])

  useEffect(()=>{
    async function FetchData(){
     try{
       const fetchUser = await axios.get('http://localhost:4000/api/get')
      const response = fetchUser.data
      //console.log(response)
      setData(response)
     }catch(error){
        console.log(error)
     }
    }
    FetchData()
  },[data])

  
  return (
    <>
         <div className="container">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Users</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#addUserModal">
                                    <i className="material-icons">&#xE147;</i> <span>Add New User</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                       
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Father</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                           {data.user?.map((elem,index)=>{
                          return(
                             <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.age}</td>
                                        <td>{elem.email}</td>
                                        <td>{elem.phone}</td>
                                        <td>
                                            <a href="#" className="edit cursor-pointer" data-bs-toggle="modal" data-bs-target="#updateUserModal"  onClick={()=>updateUserById(elem._id)}>
                                                <i className="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i>
                                            </a>
                                            <a href="#" className="delete cursor-pointer" data-bs-toggle="modal" data-bs-target="#deleteUserModal" onClick={()=>deleteUserById(elem._id)} >
                                                <i className="material-icons" data-bs-toggle="tooltip" title="delete" >&#xE872;</i>
                                            </a>
                                            {/* <a className="delete" data-bas-toggle='modal' data-bs-target='#deleteEmployeeModal'><i className="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a> */}
                                        </td>
                                    </tr>
                          )
                        })}
                           
                                   
                              

                        </tbody>
                    </table>
                </div>
            </div >

    </>
  )
}
