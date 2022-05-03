import React from 'react';
import Footer from '../../layout/footer';
import Header from '../../layout/header';
import Main from '../../layout/main';
import Sidebar from '../../layout/sidebar';

export default function layout() {
  return (
    <div className='layouts'>
      <Header></Header>
      <div className='u-flex'>
        <Sidebar></Sidebar>
        <div className='u-flex-column'>
          <Main></Main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
