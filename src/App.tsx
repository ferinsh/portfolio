import { useState } from 'react'
import reactLogo from './assets/react.svg'
import placeHolderLogo from './assets/logoipsum-399.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {
  
  return (
    <>
      <section className="header" id="mainheader">
        <img src={placeHolderLogo} className='header-logo' alt="place holder logo" />
        <section className="header-controls-holder">
          <button>Home</button>
          <button>About</button>
          <button>Contact</button>
        </section>
      </section>
    </>
  )
}

export default App
