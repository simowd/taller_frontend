import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import EditorSideBar from './components/Generic/EditorSideBar';
import Navbar from './components/Generic/Navbar';
import MainSideBar from './components/Generic/MainSideBar';
import Editor from './pages/Editor';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { loadUser } from './reducers/user_reducer';
import HomeMenu from './pages/HomeMenu';
import LogoutContainer from './components/Generic/LogoutContainer';

function App() {
  //Redux variable
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

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
          <Route index element={<Navigate to='/s/menu'/>}/>
          <Route path='menu' element={<HomeMenu />}/>
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
