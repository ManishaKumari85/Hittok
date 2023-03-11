import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import SignUp from './signup';
import Login from './login';
import Home from './home';
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<SignUp />} />
    <Route path='/login' element={<Login />} />
    <Route path='/home' element={<Home />} />

  </Routes>
  </BrowserRouter>
  

    </div>
  );
}

export default App;
