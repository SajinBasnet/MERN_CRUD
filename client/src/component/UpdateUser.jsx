



export default function UpdateUser({value,handleChange,handleSubmit}) {

 


  return (
    <>
       <div className="modal fade" id="updateUserModal">
  <div className="modal-dialog">
    <div className="modal-content">
    <form onSubmit={handleSubmit}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit User</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="form-group">
        <label>Name</label>
        <input type='text' className='form-control' name='name' value={value.name} onChange={handleChange} />
        </div>
        <div className="form-group">
        <label>Age</label>
        <input type='text' className='form-control' name='age' value={value.age} onChange={handleChange} />
        </div>

         <div className="form-group">
        <label>Email</label>
        <input type='text' className='form-control' name='email' value={value.email} onChange={handleChange} />
        </div>
         <div className="form-group">
        <label>Phone</label>
        <input type='text' className='form-control' name='phone' value={value.phone} onChange={handleChange} />
        </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" >Edit</button>
      </div>
    </form>
    </div>
  </div>
</div>
    </>
  )
}
