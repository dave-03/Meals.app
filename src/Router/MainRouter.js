import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from '../Components/LogIn.js/LogIn'
import Main from '../Components/Main/Main'


function MainRouter() {
  return (
    <div>
        <BrowserRouter>

                <Routes>
                    <Route path='/' element={<LogIn></LogIn>}></Route>
                        <Route path='/Main' element={<Main></Main>}></Route>
                </Routes>

        </BrowserRouter>
    </div>
  )
}

export default MainRouter