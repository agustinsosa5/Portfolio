import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/UI/header'
import Section from './components/UI/section'
import Form from './components/Forms/Form'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />    
    <Section />   
    <Form />    
  </React.StrictMode>,
)
