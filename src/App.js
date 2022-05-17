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
import Settings from './components/Settings';

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
          <Route path='home' element={<HomeMenu />} />
          <Route path='settings' element={<Settings />} />
          <Route path='menu' element={<Navigate to='/s/home' />} />
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
