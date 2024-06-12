import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModeContextProvider } from './contexts/mode.context.jsx'
import { LanguageContextProvider } from './contexts/language.context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ModeContextProvider>
      <LanguageContextProvider>
         <App /> 
      </LanguageContextProvider> 
    </ModeContextProvider>
  </React.StrictMode>,
)
