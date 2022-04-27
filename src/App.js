
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import AddUser from './component/AddUser/AddUser';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='user/add' element={<AddUser></AddUser>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
     </Routes>
    </div>
  );
}

export default App;
