import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import { dblClick } from '@testing-library/user-event/dist/click';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  // const toggleModegreen = () => {
  //   if (mode === 'light') {
  //     setMode('green');
  //     document.body.style.backgroundColor = 'green';
  //     showAlert("Green mode has been enabled", "success");
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }
  return (
    <>
      {/* toggleModeg={toggleModegreen} */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove
            Extra Spaces" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;