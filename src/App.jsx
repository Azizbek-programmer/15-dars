import React from 'react'
import Header from './components/hader/Header'
import Fotter from './components/footer/Fotter'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Work from './pages/work/Work'
import Blog from './pages/block/Blog'
import Contact from './pages/contact/Contact'
import Pricing from './pages/pricing/Pricing'

const App = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
    {/* <Fotter/> */}
    </>
  )
}

export default App