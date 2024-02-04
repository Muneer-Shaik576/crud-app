import {AppBar,Toolbar, styled} from '@mui/material'
import { NavLink } from 'react-router-dom'


 const Navbar= () => {
    const Header = styled(AppBar)`
       background:black;
    
    `
    const Tabs=styled(NavLink)`
     font-size:20px;
     margin-right:20px;
     color:inherit;
     text-decoration:none;
    `
    return(
       <Header  position="static">
        <Toolbar >
          <Tabs >WINIT solutions</Tabs>
          <Tabs to={'/'}>Home</Tabs>
          <Tabs to={'/addUser'}>Add Employee</Tabs>
        </Toolbar>
       </Header>

       
    )
}

export default Navbar