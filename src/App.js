import React from 'react'

import './App.css'; 
import { Header, About, Projects, Skills, Footer, Navbar } from './containers';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          <Navbar />
          <Header />
      </div>    
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App