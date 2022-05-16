import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import EditorSideBar from './components/Generic/EditorSideBar';
import Navbar from './components/Generic/Navbar';
import MainSideBar from './components/Generic/MainSideBar';
import Editor from './pages/Editor';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import HomeMenu from './pages/HomeMenu';
import LogoutContainer from './components/Generic/LogoutContainer';

function App() {
  //Setup react routes
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index />
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route path='/s' element={<MainSideBar />}>
          <Route index element={<Navigate to='/s/menu' />} />
          <Route path='menu' element={<HomeMenu />} />
          <Route path='home' element={<Navigate to='/s/menu' />} />
          <Route path='logout' element={<LogoutContainer />} />
        </Route>
        <Route path='/e' element={<EditorSideBar />}>
          <Route index />
          <Route path='editor' element={<Editor />} />
        </ Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
