import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/SignUp/Signup';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const user=localStorage.getItem("token");
  return (
    <Routes>
      {user && <Route path='/' exact element={<Home/>} />}
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/' exact element={<Navigate replace to='/login'/>}/>
    </Routes>
  );
}

export default App;
