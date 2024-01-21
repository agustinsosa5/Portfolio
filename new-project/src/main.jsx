import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/UI/header'
import Section from './components/UI/section'
import Skills from './components/UI/skills'
import Form from './components/Forms/Form'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />    
    <Section />   
    <Skills />
    <Form />    
  </React.StrictMode>,
)
