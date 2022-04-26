import React from 'react'
import Footer from './footer'
import Header from './header'
import Main from './main'
import Sidebar from './sidebar'


export default function layout () {
  return (
    <div>
      <Footer></Footer>
      <Header></Header>
      <Main></Main>
      <Sidebar></Sidebar>
    </div>
  )
}
