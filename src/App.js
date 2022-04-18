import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { loadUser } from './reducers/user_reducer';

function App() {
  //Redux variable
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Chau</div>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
