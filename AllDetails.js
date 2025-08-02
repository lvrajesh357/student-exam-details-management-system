import React, {useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import stdmarksservice from '../Services/Services';
import '../Styles/AllDetails.css';

export default function AllDetails() {
    const [studentsmarks,setMarks]=useState([]);
    const navigate=useNavigate();

    const getall = () => {
        stdmarksservice.stdmarksall()
        .then((response) =>{
            console.log("Fetched students:", response.data); 

            if (response.data && response.data.length > 0) {
                setMarks (response.data);
                console.log(response.data);
              } 
             else {
                setMarks([]);
              }
        })

        .catch((error) =>{
            console.error("Error fetching students:", error);
        })
    };


       const deleteStudent = (id) => {
    console.log(id);
    if(window.confirm("Are you sure you want to delete this student?")){
    stdmarksservice.StdmarksDelete(id)
      .then(() => {
        getall(); // Refresh list after deletion
      })  
      .catch((error) => {
        console.error("Error deleting student:", error);
      });
    }
  };

  useEffect(() => {
    getall(); // Fetch students on component mount
  }, []);


  return (
    <div style={{
      width:'100%',
      height:'100vh',
      backgroundSize:'cover',
      backgroundPosition:'center',
      // display: "flex",
      // alignItems: "center",
      // justifyContent: "center",
      padding: "20px",
      backgroundImage:"url('https://media.istockphoto.com/id/1435226158/photo/circuit-board-background-computer-data-technology-artificial-intelligence.jpg?b=1&s=612x612&w=0&k=20&c=I8gIoXrpraVvPfQJ8NN3-kJKOP4yWw3FLNIsXo1dwks=')"}}>
    <div>
     <Link  to="/addmarks" className="btn btn-success Link">Add Student Details</Link>
      <h2 className="text-center mb-4 fw-bold">Student Details</h2>

      {studentsmarks.length === 0 ? (
                    <h4 style={{color:'red'}} className="text-center mt-4 fw-bold">No student records found</h4>
                ) : (

      <table style={{ borderCollapse:'separate', borderSpacing: '5px'}}  className="table table-striped table-bordered">
        <thead >
          <tr>
            <th style={{ textAlign: "center" }}>S.No</th>
            <th style={{ textAlign: "center" }}>Student Name</th>
            <th style={{ textAlign: "center" }}>Telugu</th>
            <th style={{ textAlign: "center" }}>Hindi</th>
            <th style={{ textAlign: "center" }}>English</th>
            <th style={{ textAlign: "center" }}>Maths</th>
            <th style={{ textAlign: "center" }}>Science</th>
            <th style={{ textAlign: "center" }}>Social</th>
            <th style={{ textAlign: "center" }}>Total</th>
            <th style={{ textAlign: "center" }}>Percentage</th>
            <th style={{ textAlign: "center" }}>Rank</th>
            <th style={{ textAlign: "center" }}>Status</th>
            <th style={{ textAlign: "center" }}>Optional</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:'ButtonHighlight'}}>
          {studentsmarks.map((marks) => (
            <tr key={marks.sno}>
              <td style={{ textAlign: "center" }}>{marks.sno}</td>
              <td style={{ textAlign: "center" }}>{marks.name}</td>
              <td style={{ textAlign: "center" }}>{marks.telugu}</td>
              <td style={{ textAlign: "center" }}>{marks.hindi}</td>
              <td style={{ textAlign: "center" }} >{marks.english}</td>
              <td style={{ textAlign: "center" }}>{marks.maths}</td>
              <td style={{ textAlign: "center" }}>{marks.science}</td>
              <td style={{ textAlign: "center" }}>{marks.social}</td>
              <td style={{ textAlign: "center" }}>{marks.total}</td>
              <td style={{ textAlign: "center" }} >{marks.percentage}<span> </span><span>%</span></td>
              <td style={{ textAlign: "center" }}>{marks.rank}</td>
              <td style={{ textAlign: "center" }}>{marks.status}</td>
              <td>
                <button
                  className="button" style={{marginLeft:'20px'}}
                  onClick={() => navigate(`/editmarks/${marks.sno}`)} 
                >
                  Edit Student
                </button>
                <button
                  className="button1" style={{marginLeft:'20px'}}
                  onClick={() => deleteStudent(marks.sno)}
                >
                  Delete  
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div></div>
  )
}
