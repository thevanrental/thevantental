import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import i18n from './i18n'
import './index.css'

const root = document.getElementById('root')!

ReactDOM.hydrateRoot(
  root,
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

const savedLang = localStorage.getItem('lang')
if (savedLang && savedLang !== 'en') {
  window.setTimeout(() => i18n.changeLanguage(savedLang), 0)
}
