import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar }  from './components/Generic/Navbar';
import { loadUser } from './reducers/user_reducer';

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
          <Route path='signin' />
          <Route path='signup' />
        </Route>
        <Route path='/s' element={<div>Chau</div>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
