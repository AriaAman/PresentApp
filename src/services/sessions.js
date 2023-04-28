import axios from "axios";
// 10.7.18.214
export const getSessions = async() => {
    try{
        const res = await axios.get('http://10.7.18.214:4500/classes');
        return res.data;
    }catch(error){
        console.log(error);
        return error.response;
    }
}