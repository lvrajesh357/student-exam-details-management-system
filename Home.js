import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{width:'100%',
        height:'100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyHhyCNIBVtM0flhueq2njN2vu1ssdj_4gxg&s')"}}
        className="d-flex justify-content-center align-items-center" >

<div className="position-absolute top-0 start-0 m-3">
        <img
          src="../images/img.jpg" 
          alt="Avatar"
          className="rounded-circle"
          style={{ width: '100px', height: '100px' }}
        />
      </div>

      <div className="position-absolute bottom-20 start-80 m-3" style={{ left: '200px' }}>
  <img
    src="../images/profile1.jpg" 
    alt="normal"
    style={{
      width: '100px',
      height: '500px',
    }}
  />
</div>


      <div className="position-absolute bottom-0 start-0 m-3">
        <img
          src="../images/img1.jpg" 
          alt="Avatar"
          className="rounded-circle"
          style={{ width: '100px', height: '100px' }}
        />
      </div>

      <div className="position-absolute top-0 end-0 m-3">
        <img
          src="../images/img4.jpg" 
          alt="Avatar"
          className="rounded-circle"
          style={{ width: '100px', height: '100px' }}
        />
      </div>

      <div className="position-absolute bottom-20 start-80 m-3" style={{ right: '200px' }}>
  <img
    src="../images/profile.jpg" 
    alt="normal"
    style={{
      width: '100px',
      height: '500px',
    }}
  />
</div>


      <div className="position-absolute bottom-0 end-0 m-3">
        <img
          src="../images/img2.jpg" 
          alt="Avatar"
          className="rounded-circle"
          style={{ width: '100px', height: '100px' }}
        />
      </div>

  
    <div>
          <Link  to="/addmarks" className="btn btn-success custom-link m-3 Link">Add Student Details</Link>
               <Link  to="/alldetails" className="btn btn-success m-3 Link">AllDetails</Link>
                    {/* <Link  to="/StdmarksDelete" className="btn btn-success Link">Delete</Link> */}
                         {/* <Link  to="/editmarks/:id" className="btn btn-success m-3 Link">Update Student Details</Link> */}
                         <Link to='/style' className='btn btn-success m-3 Link'>Style sheet</Link>
    </div>

    </div>
  ) 
}
