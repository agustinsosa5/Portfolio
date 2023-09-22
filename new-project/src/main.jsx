import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/UI/header'
import Section from './components/UI/section'
import About from './components/UI/aboutMe'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Section />
    <About />
  </React.StrictMode>,
)
