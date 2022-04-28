import React from 'react'
import Footer from './footer'
import Header from './header'
import Main from './main'
import Sidebar from './sidebar'

export default function layout () {
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
  )
}
