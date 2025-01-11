import { useState } from "react"
import Signup from "./Signup"
import Login from "./Login"
import Home from "./Home"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Navigate to="/login" />}/>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
