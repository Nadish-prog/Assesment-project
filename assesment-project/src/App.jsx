import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Firstpage from "./components/firstpage.jsx";
import './App.css'
import FormValidation from "./FormValidation.jsx";
import Quiz from "./Quiz.jsx";

import TestComponent from "./components/TestComponent.jsx";
function App() {


  return (
    <>
        <div className="App">
            <div><Firstpage/></div>
            <div><TestComponent/></div>

        </div>
    </>
  )
}

export default App;
