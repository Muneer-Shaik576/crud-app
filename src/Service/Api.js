import axios from 'axios';


const Url="http://localhost:8080"

export const addUser = async (data)=>{
    try{
        return await axios.post(`${Url}/user`,data);
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}

export const getUsers= async(id)=>{
    id=id||'';
    try{
       return await axios.get(`${Url}/users/${id}`);
    }catch(error){
        console.log("Error while getting data",error);
    }
}


export const editUser = async (data,id)=>{
    try{
        return await axios.put(`${Url}/editUser`,data);
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}


export const deleteUser = async (id)=>{
    try{
        return await axios.delete(`${Url}/deleteUser/${id}`);
    }catch(error){
        console.log("Error while calling delete api",error);
    }
}

export const deleteAll=async(list)=>{
    try{
        return await axios.delete(`${Url}/deleteAll/${list}`);
    }catch(error){
        console.log("Error while calling delete All",error);
    }
}

export const getspecUSers=async(data)=>{
    try{
        return await axios.get(`${Url}/getuser/${data}`)
    }catch(e){
        console.log("Error while getting specific data",e);
    }
}
