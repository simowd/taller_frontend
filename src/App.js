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
import User from './pages/User';
import RequireAuth from './hooks/RequireAuth';
import Landing from './pages/Landing';
import NoRequireAuth from './hooks/NoRequireAuth ';

function App() {
  //Setup react routes
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NoRequireAuth> <Navbar /> </NoRequireAuth>}>
          <Route index element={<Landing />} />
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route path='/s' element={<RequireAuth> <MainSideBar /></RequireAuth>}>
          <Route index element={<Navigate to='/s/menu' />} />
          <Route path='home' element={<HomeMenu />} />
          <Route path='settings' element={<Settings />} />
          <Route path='menu' element={<Navigate to='/s/home' />} />
          <Route path='logout' element={<LogoutContainer />} />
          <Route path='account' element={<User />} />
          <Route path='*' element={<Navigate to='/s/home' />} />
        </Route>
        <Route path='/e' element={<RequireAuth> <EditorSideBar /></RequireAuth>}>
          <Route index element={<Navigate to='/s/menu' />} />
          <Route path=':projectId' element={<Editor />} />
        </ Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
