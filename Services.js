import axios from 'axios';

const API_URL = "http://localhost:8778/examdetails/exam"; 

class ExamServices {
    addStudentmarks(student) {
        return axios.post(API_URL, student);
    }

    stdmarksall(){
        return axios.get(API_URL);
    }

    StdmarksDelete(id){
        return axios.delete(`${API_URL}/${id}`);
    }

    getById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    stdmarksupdate(id,marks){
        return axios.put(`${API_URL}/${id}`,marks);
    }

}

const Instance = new ExamServices();
export default Instance;
