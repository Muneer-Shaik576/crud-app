import './App.css';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addUser' element={<AddUser/>}/>
      <Route path='/EditUser/:id' element={<EditUser/>}/>
     </Routes>
    </BrowserRouter>
    
  
  );
}

export default App;
