import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AddContacts } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function AddContact() {
  const [contact,setContact]=useState({
    name:"",photo:"",mobile:"",email:"",company:"",title:""
  })
  const handleCreate = async (e)=>{
    e.preventDefault()
    const {name,photo,mobile,email,company,title} = contact
    if (!name || !photo|| !mobile|| !email|| !company|| !title){
      toast.warning(`please fill all the field`)
    }else{
      const response = await AddContacts(contact)
      if(response.status>=200 && response.status<300){
        //success message
        toast.success(` Contact uploaded successfully...`)
        //reset video state
        setContact({name:"",photo:"",mobile:"",email:"",company:"",title:""})
      }else{
        toast.error("Upload error... Perform the operation after sometime!!!")
        console.log(response);
      }
    }
  }
  return (
    <>
      <section >
          <div className='p-3'>
            <div className='d-grid'>
              <Row>
               <div>
                  <h3>Create Contact</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis error ipsam amet voluptatem. Ullam, maxime delectus iusto unde expedita accusamus est maiores ea consequuntur qui sunt eius architecto vitae totam.</p>
                </div>
              </Row>
            </div>
            <div className="row ms-3">
              <div className="col-md-4">
                <form>
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Name' onChange={(e)=>setContact({...contact,name:e.target.value})} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='photo Url' onChange={(e)=>setContact({...contact,photo:e.target.value})} />
                  </div>
                  <div className="mb-3">
                    <input type="number" className='form-control' placeholder='Number' onChange={(e)=>setContact({...contact,mobile:e.target.value})} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Email' onChange={(e)=>setContact({...contact,email:e.target.value})} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Company' onChange={(e)=>setContact({...contact,company:e.target.value})} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Title' onChange={(e)=>setContact({...contact,title:e.target.value})} />
                  </div>
                  <button onClick={(e)=>handleCreate(e)} type="submit" class="btn btn-success">Create</button>
                  <Link to={'/contactlist'}><button type="submit" class="btn btn-primary ms-3">Back</button></Link>
                </form>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer
        position='top-center'
        theme='colored'
        autoClose={2000}
        />
    </>
  )
}

export default AddContact;