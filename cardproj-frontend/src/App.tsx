import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import CreateCharacter from './components/CreateCharacter';
import GlobalCharacters from './components/GlobalCharacters';
import UserCharacters from './components/UserCharacters';

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create-character" element={<CreateCharacter />}></Route>
        <Route path="/user-characters" element={<UserCharacters />}></Route>
        <Route path="/global-characters" element={<GlobalCharacters />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
