import {Button, FormControl, FormGroup, Input, InputLabel, Typography, styled } from "@mui/material"
import { useState } from "react"
import { addUser } from "../Service/Api"
import { useNavigate } from "react-router-dom"


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

const AddUser=()=>{

    const navigate=useNavigate();
    const[user,setUser]=useState(intialValues)
    
    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }
    const addUSerDetails=async()=>{
        await addUser(user)
       navigate('/')
    }
    return(
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone Number</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone"/>
            </FormControl>
            <FormControl>
                <Button onClick={()=>addUSerDetails()} variant="contained">Add User</Button>
            </FormControl>
        </Container>
     
    )
}
export default AddUser