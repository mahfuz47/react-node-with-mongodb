
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import AddUser from './component/AddUser/AddUser';
import UpdateUser from './component/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='user/add' element={<AddUser></AddUser>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
     </Routes>
    </div>
  );
}

export default App;
