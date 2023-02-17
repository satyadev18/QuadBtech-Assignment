import React from 'react'
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Detail from './components/Detail/Detail'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Link to='/'><Navbar/></Link>
        <Routes>
          <Route exact path = '/' element={<Home/>}> </Route>
          <Route exact path = 'detail/:id' element={<Detail/>}> </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App