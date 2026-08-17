import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const redirect = sessionStorage.getItem("redirect")

if (redirect) {
  sessionStorage.removeItem("redirect")
  window.history.replaceState(null, "", redirect)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)