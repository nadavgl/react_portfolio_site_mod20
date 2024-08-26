import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'


function App() {
  const title = 'My Portfolio'


  return (
    <>
      <Header title={title} />
      <main className='flex-1'>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>

      <Footer />

    </>
  )
}

export default App
