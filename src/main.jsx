import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignIn from './Guest/SignIn.jsx'
import SignUp from './Guest/SignUp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <SignUp/> */}
    {/* <SignIn/> */}
  </React.StrictMode>,
)
