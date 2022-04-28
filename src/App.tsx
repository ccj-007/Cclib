import React from 'react';
import './App.css';
import Layout from './layout/index';
// import { GlobalStyles } from './style/global';
// import { Global, css } from '@emotion/react';

function App() {
  return (
    <div className='App'>
      {/* <Global styles={GlobalStyles}> */}
      <Layout></Layout>
      {/* </Global> */}
    </div>
  );
}

export default App;
