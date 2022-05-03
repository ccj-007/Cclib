import React from 'react';
import './App.css';
import Layout from './page/home';
import Login from './page/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import { GlobalStyles } from './style/global';
// import { Global, css } from '@emotion/react';

function App() {
  return (
    <div className='App'>
      {/* <Global styles={GlobalStyles}> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='home/*' element={<Layout />}>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* </Global> */}
    </div>
  );
}

export default App;
