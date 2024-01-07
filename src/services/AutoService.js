import axios from "axios";

const AUTO_BASE_REST_API_URL = "http://localhost:8080/api/v1/autos";
class AutoService{
    getAllAutos(){
        return axios.get(AUTO_BASE_REST_API_URL);
    }

    createAuto(auto){
        return axios.post(AUTO_BASE_REST_API_URL, auto);
    }
}

export default new AutoService();