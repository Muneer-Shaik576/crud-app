import axios from 'axios';


const Url="http://127.0.0.1:3002/user"

export const addUser = async (data)=>{
    try{
        return await axios.post(`${Url}`,data);
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}

export const getUsers= async(id)=>{
    id=id||'';
    try{
       return await axios.get(`${Url}/${id}`);
    }catch(error){
        console.log("Error while getting data",error);
    }
}


export const editUser = async (data,id)=>{
    try{
        return await axios.put(`${Url}/${id}`,data);
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}


export const deleteUser = async (id)=>{
    try{
        return await axios.delete(`${Url}/${id}`);
    }catch(error){
        console.log("Error while calling delete api",error);
    }
}

export const deleteAll=async(list)=>{
    try{
        return await axios.delete(`${Url}/${list}`);
    }catch(error){
        console.log("Error while calling delete All",error);
    }
}

export const getspecUSers=async(data)=>{
    try{
        return await axios.get(`${Url}/${data}`)
    }catch(e){
        console.log("Error while getting specific data",e);
    }
}
