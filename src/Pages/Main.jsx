import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Monitoris from './Monitors'

const Main = ({products}) => {
  return (
    <Routes>
      <Route path='/' element={<Home products={products}/>}/>
      <Route path='/monitore' element={<Monitoris products={products}/>}/>
    </Routes>
  )
}

export default Main
