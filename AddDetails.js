import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom"; 
import StdExamServices from '../Services/Services'


export default function  AddMarkDetails(){
    
    const [name, setname] = useState("");
    const [telugu, settelugu] = useState("");
    const [hindi, sethindi] = useState("");
    const [english, setenglish] = useState("");  
    const [maths, setmaths] = useState("");
    const [science, setscience] = useState("");
    const [social, setsocial] = useState("");
    
    const [loading, setLoading] = useState(false); 

    const navigate  = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setLoading(true);

        // Create the student data object
        const studentData = { name, telugu, hindi, english, maths, science, social };
        console.log("details : ",studentData );

        //  API call
        StdExamServices.addStudentmarks(studentData)
            .then(response => {
                setLoading(false);
                console.log(response);   //check API
                if (response.status === 200) {
                    alert("Student Exam details added successfully!");
                    navigate ('/alldetails'); 
                }
                 else {
                    alert("Failed to add student Exam details.");
                }
            })
            .catch(error => {
                setLoading(false); // Stop loading on error
                console.log("Error in API call:", error);
                alert("Failed to add student Exam details.");
            });

        // Reset form fields after submission (Optional)
        // setname("");
        // settelugu("");
        // sethindi("");
        // setenglish("");
        // setmaths("");
        // setscience("");
        // setsocial("");
    };

    return (
       
        <div style={{width:'100%',
            height:'100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuHfliwlpDy-MOse3tnrraus3ZhuKw3GCE53v4PqI_S4Gz6YC5eM_X6-F9dubA8ZhAgA&usqp=CAU')"}}
                    className="d-flex justify-content-center align-items-center">

        <div>
            <h2 className='text-center mb-4 fw-bold'>Student Exam Marks Details</h2>
            <form onSubmit={handleSubmit}>
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

    );
}



// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from "react-router-dom"; 
// import StdExamServices from '../Services/Services'

// export default function AddMarkDetails() {
//     const [name, setname] = useState("");
//     const [telugu, settelugu] = useState("");
//     const [hindi, sethindi] = useState("");
//     const [english, setenglish] = useState("");  
//     const [maths, setmaths] = useState("");
//     const [science, setscience] = useState("");
//     const [social, setsocial] = useState("");

//     const [loading, setLoading] = useState(false); 
//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault(); 
//         setLoading(true);

//         const studentData = { name, telugu, hindi, english, maths, science, social };
//         console.log("details : ", studentData );

//         StdExamServices.addStudentmarks(studentData)
//             .then(response => {
//                 setLoading(false);
//                 console.log(response);
//                 if (response.status === 200) {
//                     alert("Student Exam details added successfully!");
//                     navigate('/'); 
//                 } else {
//                     alert("Failed to add student Exam details.");
//                 }
//             })
//             .catch(error => {
//                 setLoading(false);
//                 console.log("Error in API call:", error);
//                 alert("Failed to add student Exam details.");
//             });
//     };

//     return (
//         <div 
//             style={{
//                 width: '100%',
//                 height: '100vh',
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQuHfliwlpDy-MOse3tnrraus3ZhuKw3GCE53v4PqI_S4Gz6YC5eM_X6-F9dubA8ZhAgA&usqp=CAU')"
//             }}
//             className="d-flex justify-content-center align-items-center"
//         >
//             <div className='container bg-light p-4 rounded shadow'>
//                 <h2 className='text-center text-primary mb-4'>Student Exam Marks Details</h2>

//                 <form onSubmit={handleSubmit} className="px-4">
//                     <div className='mb-3 text-center'>
//                         <label htmlFor='name' className='form-label fw-bold'>Name</label>
//                         <input type='text' className='form-control' id='name' value={name} onChange={(e) => setname(e.target.value)} required />
//                     </div>

//                     <div className='mb-3 text-center text-white bg-primary p-2 rounded'>
//                         <h4>Add Student Marks</h4>
//                     </div>

//                     {["telugu", "hindi", "english", "maths", "science", "social"].map((subject, index) => (
//                         <div className='mb-3 text-center' key={index}>
//                             <label htmlFor={subject} className='form-label fw-bold text-capitalize'>{subject}</label>
//                             <input 
//                                 type='text' 
//                                 className='form-control' 
//                                 id={subject} 
//                                 value={eval(subject)} 
//                                 onChange={(e) => eval(`set${subject}(e.target.value)`) } 
//                                 required 
//                             />
//                         </div>
//                     ))}

//                     <div className='mb-3 text-center'>
//                         <button type='submit' className='btn btn-success' disabled={loading}>
//                             {loading ? 'Submitting...' : 'Submit'}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

