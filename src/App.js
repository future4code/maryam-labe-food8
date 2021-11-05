import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from "./routes/Router"
import SignUpPage from './pages/SignUpPage/SignUpPage';
import RegisterAddressPage from './pages/SignUpPage/RegisterAddressPage';
import EditInfoPage from './pages/EditInfoPage/EditInfoPage'

function App() {
  return (
    <div>
      <Router />

    </div>
  )
}
  

export default App;
