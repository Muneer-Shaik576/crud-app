import { Box, Button, Modal, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material"
import { useEffect, useState } from "react"
import { deleteAll, getUsers } from "../Service/Api";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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

const Modalex=({ChooseData})=>{
    const[open,setModal]=useState(false)

    const handleOpen=()=>{
        setModal(true)
    }
    const handleClose=()=>{
        setModal(false)
    
        
    }

    const[user,setUser]=useState([])
    const[isChecked,setChecked]=useState([])
    useEffect(()=>{
        getUserData();
    },[])

    const getUserData=async()=>{
        let response= await getUsers();
        //   console.log(response);
          setUser(response.data)
    }

    const handlcheckbox=(e)=>{
       
        const value=e.target.value;
       const checked=e.target.checked;
     

        if(checked)
        {
            setChecked([...isChecked,value]);
            
           
        }else{
            setChecked(isChecked.filter((e)=>e!==value))
        }
      
    }
    const alldelete=async()=>{
        await deleteAll(isChecked);
       
        handleClose();
        

    }
    const ViewData=()=>{
        ChooseData(isChecked)
        handleClose();
    }

   
    return (
        <>
        
        <Button variant="contained" style={{margin:"auto 60px "}} onClick={handleOpen}>Select data</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
     <StyledTable>
                <TableHead>
                    <Thead>
                        <TableCell>#</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>email</TableCell>
                        <TableCell>phone</TableCell>
                    </Thead>
                </TableHead>
                <TableBody>
                    {
                        user.map((users,i)=>(
                            <Tbody key={i}>
                                <TableCell><input type="checkbox" value={users.id} checked={users.isChecked} onChange={(e)=>handlcheckbox(e)}/></TableCell>
                                <TableCell>{users.name}</TableCell>
                                <TableCell>{users.email}</TableCell>
                                <TableCell>{users.phone}</TableCell>
                            </Tbody>
                        ))
                    }
                </TableBody>
            </StyledTable>
            <Button variant="contained" style={{marginRight:"20px"}} onClick={alldelete}>delete</Button>
            <Button variant="contained" onClick={ViewData}>view sorted Data</Button>      
  </Box>
</Modal>


       </>
    )
}
export default Modalex