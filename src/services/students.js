import axios from "axios";

export const login = async(data) => {
    try{
        const res = await axios.post('http://10.7.18.214:4500/students/login',data);
        console.log('login',res)
        return res.data;
    }catch(error){
        console.log(error);
        return error.response;
    }
}