import { useState,useEffect } from 'react'
import { api } from './_api'
import {Routes,Route,BrowserRouter as Router } from "react-router-dom"
import Index from './pages'
import GoogleRedirect from './pages/googleredirect'
import DropBoxRedirect from './pages/dropboxredirect'


function App() {


  return (
    <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/google-redirect/*" element={<GoogleRedirect />} />
        <Route exact path="/dropbox-redirect/*" element={<DropBoxRedirect />} />

     </Routes>
     
  )
}

export default App
