import React, { useEffect, useState } from 'react'
import {Row,Card,ListGroup,Col} from 'react-bootstrap'
import {Link, Routes, Route} from 'react-router-dom'
import { getAllContacts } from '../services/allAPI'
import { deleteAContact , } from '../services/allAPI'
import ViewContact from './ViewContact'



function Contactlist() {
  
  const [allContact, setAllContact]= useState({})
   const getAllUploadedContacts = async () =>{
    const {data} = await getAllContacts()
    setAllContact(data)
   }

   //deleting a video
  const handleDelete = async (id) =>{
    //make api call
    await deleteAContact(id)
  }

  useEffect(()=>{
    getAllUploadedContacts()
   })
  return (
   <>
      <section className='p-3'>
        <div>
          <div className='d-grid'>
            <Row>
             
              <div>
                <h3>Contact Manager</h3>
                <Link to={'/addcontact'} className="btn btn-primary ms-2">
                  <i className='fa fa-plus-circle me-2'> New</i>
                </Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis error ipsam amet voluptatem. Ullam, maxime delectus iusto unde expedita accusamus est maiores ea consequuntur qui sunt eius architecto vitae totam.</p>
              </div>
              
            </Row>
          </div>
        </div>
      </section>

    <section>
      <div>
        <Row className='m-3' style={{marginTop:'100px'}}>
          {
            allContact?.length>0?
            allContact?.map((contact,index)=>(
              <Col key={index} sm={4} md={4} lg={4} xl={4}>
            <Card className='m-4' style={{ width: '22rem' }}>
                  <Card.Img style={{width:'200px',borderRadius:'50%',height:'200px'}} className='m-3' variant="top" src={contact.photo} />
                  <ListGroup className="list-group-flush">
                   <ListGroup.Item>Name : <span className='fw-bold'>{contact.name}</span>
                   </ListGroup.Item>
                    <ListGroup.Item>Mobile : <span className='fw-bold'>{contact.mobile}</span></ListGroup.Item>
                    <ListGroup.Item>Email : <span className='fw-bold'>{contact.email}</span></ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <ViewContact item={contact}/>
                    <button onClick={()=>handleDelete(contact?.id)} className='btn btn-danger ms-3'><i className='fa fa-trash'></i></button>
                </Card.Body> 
              </Card>
          </Col>
            )):<p className='fw-bolder mt-3 fs-5 text-danger'>No Contact Lists</p>
          }
        </Row>
      </div>
    </section>
   </>
  )
}

export default Contactlist;