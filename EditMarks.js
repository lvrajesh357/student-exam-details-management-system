import React, { useEffect, useState } from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import updateservices from '../Services/Services'

export default function EditMarks() {

  const [sno, setsno] = useState("");
  const [name, setname] = useState("");
  const [telugu, settelugu] = useState("");
  const [hindi, sethindi] = useState("");
  const [english, setenglish] = useState("");
  const [maths, setmaths] = useState("");
  const [science, setscience] = useState("");
  const [social, setsocial] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(() => {
    updateservices.getById(id)
      .then(response => {
        setsno(response.data.sno);
        setname(response.data.name);
        settelugu(response.data.telugu);
        sethindi(response.data.hindi);
        setenglish(response.data.english);
        setmaths(response.data.maths);
        setscience(response.data.science);
        setsocial(response.data.social);
      })
      .catch(error => console.error(error));
  }, [id]);

  const updatemarks = (event) => {
    event.preventDefault();
    if(Object.keys.length>0){

    }
    setLoading(true);

    const stdmarks = { sno, name, telugu, hindi, english, maths, science, social };
            console.log(stdmarks);
            
    updateservices.stdmarksupdate(id, stdmarks)
      .then(() => {
        alert("Details Updated Successfully");
        navigate("/Alldetails");
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  };
  return (
    <div style={{width:'100%',
      height:'100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage:"url('https://web.edcrib.com/updates/wp-content/uploads/2024/08/edcrib-blog1-1024x683.jpeg')"}}
              className="d-flex justify-content-center align-items-center">

  <div>
      <h2 style={{color:'brown'}} className='text-center mb-4 fw-bold '>Student Exam Update marks Details</h2>
      <form onSubmit={updatemarks}>

      <div className='mb-3 text-center'>
              <label style={{color:'brown'}} htmlFor='sno' className='col-md-2 row-md-5 fw-bold'>S.no</label>
              <input type='text' className='form-label' id='sno' value={sno} onChange={(e) => setname(e.target.value)} required />
          </div>

          <div className='mb-3 text-center'>
              <label style={{color:'brown'}} htmlFor='name' className='col-md-2 row-md-5 fw-bold'>Name</label>
              <input type='text' className='form-label' id='name' value={name} onChange={(e) => setname(e.target.value)} required />
          </div>

          <div className='mb-3 text-center text-primary'><h4>Add Student Marks</h4></div>
          <div className='mb-3 text-center'>
              <label style={{color:'brown'}} htmlFor='telugu' className='col-md-2 mb-3 fw-bold'>Telugu</label>
              <input type='text' className='form-label' id='telugu' value={telugu} onChange={(e) => settelugu(e.target.value)} required />
          </div>
          <div className='mb-3 text-center'>
              <label style={{color:'brown'}} htmlFor='hindi' className='col-md-2 mb-3 fw-bold'>Hindi</label>
              <input type='text' className='form-label' id='hindi' value={hindi} onChange={(e) => sethindi(e.target.value)} required />
          </div>
          <div className='mb-3 text-center'>
              <label style={{color:'brown'}} htmlFor='english' className='col-md-2 mb-3 fw-bold'>English</label>
              <input type='text' className='form-label' id='english' value={english} onChange={(e) => setenglish(e.target.value)} required />
          </div>
          <div className='mb-3 text-center'>
              <label style={{color:'brown'}} htmlFor='maths' className='col-md-2 mb-3 fw-bold'>Maths</label>
              <input type='text' className='form-label' id='maths' value={maths} onChange={(e) => setmaths(e.target.value)} required />
          </div>
          <div className='mb-3 text-center'>
              <label style={{color:'brown'}} htmlFor='science' className='col-md-2 mb-3 fw-bold'>Science</label>
              <input type='text' className='form-label' id='science' value={science} onChange={(e) => setscience(e.target.value)} required />
          </div>
          <div className='mb-3 text-center'>
              <label style={{color:'brown'}} htmlFor='social' className='col-md-2 mb-3 fw-bold'>Social</label>
              <input type='text' className='form-label' id='social' value={social} onChange={(e) => setsocial(e.target.value)} required />
          </div>

         <div className='mb-3 text-center'>
          <button type='submit' className='btn btn-success' disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
          </button></div>
      </form>
  </div></div>
  )
}
