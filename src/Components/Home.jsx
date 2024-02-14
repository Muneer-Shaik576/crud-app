import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"
import { useEffect, useState } from "react"
import {  deleteUser, getUsers, getspecUSers } from "../Service/Api";
import { Link } from "react-router-dom";
import Modalex from "./Modalex";

const StyledTable=styled(Table)`
    width:90%;
    margin:50px auto 0 auto;

`
const Thead=styled(TableRow)`
    background:#000;
    & > th {
        color:#fff;
        font-size:20px;
    }
`
const Tbody=styled(TableRow)`
    & >td{
        font-size:20px;
    }

`

const Home=()=>{
 
//To get main table data
 const[users,setUser]=useState([])
useEffect(()=>{
  getUserdetails();
},[])
const getUserdetails=async() =>{
    let response= await getUsers();
    setUser(response.data)
  }

  //to delete specifc data
const deleteUserData=async(id)=>{
    await deleteUser(id)
    getUserdetails();
}



//to get second table data

const ChooseData=(data)=>{
  
  getTotaldata(data)
}

const [view,setView]=useState([])
const getTotaldata=async(data)=>{
    // console.log(data);
    
    let response=await getspecUSers(data);
    setView(response.data)
   setView( view => view.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
      }));
}



    return(
        <>
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Action</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map((user,i)=>(
                        <Tbody key={i}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="secondary" style={{marginRight:10}} component={Link} to={`/editUser/${user.id}`}>Edit</Button>
                                <Button variant="contained" onClick={()=>{deleteUserData(user.id)}}> Delete </Button>
                            </TableCell>
                        </Tbody>
                    
                    ))
                }
            </TableBody>
        </StyledTable> 
        
     <Modalex ChooseData={ChooseData}></Modalex>
     
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Action</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    view.map((user,i)=>(
                        <Tbody key={i}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="secondary" style={{marginRight:10}} component={Link} to={`/editUser/${user.id}`}>Edit</Button>
                                <Button variant="contained" onClick={()=>{deleteUserData(user.id)}}> Delete </Button>
                            </TableCell>
                            
                        </Tbody>
                    
                    ))
                }
            </TableBody>
        </StyledTable> 
    </>
    )
}
export default Home