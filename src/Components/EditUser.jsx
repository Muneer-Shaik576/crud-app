import {Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from "@mui/material"
import { useEffect, useState } from "react"
import {  editUser, getUsers } from "../Service/Api"
import { useNavigate, useParams } from "react-router-dom"


const Container=styled(FormGroup)`
width:50%;
margin:5%  auto 0 auto;
& > div {
   margin:20px
}
`
const intialValues={
   name:"",
   email:"",
   phone:""
}

const EditUser=()=>{

    const navigate=useNavigate();
    const[user,setUser]=useState(intialValues)
    const {id}=useParams();

    useEffect(()=>{
           getUserData();
    },[])

    const getUserData= async()=>{
        let response=await getUsers(id);
        // console.log(response);
        setUser(response.data)
    }

    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }
    const editUSerDetails=async()=>{
        await editUser(user,id)
       navigate('/')
    }
    return(
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button onClick={()=>editUSerDetails()} variant="contained">Edit User</Button>
            </FormControl>
        </Container>
     
    )
}
export default EditUser