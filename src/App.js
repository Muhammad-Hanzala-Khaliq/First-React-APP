import { useState } from 'react';
import './App.css'
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/FormText';
import Alert from './component/Alert';
import React from "react";
import {
  BrowserRouter as Main,
  Routes,
  Route,
} from "react-router-dom";

function App(){
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyClasses =()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');

  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-' + cls)
    //  if(mode==='bg-dark'){
    //    setMode('dark');
      //  color : 'white';
    // document.body.style.color = '#042743';
  //  showAlert("Dark mood has been enable "," Success ");
    //  }else{
  //     setMode('light');
  //   document.body.style.backgroundColor = 'white';
  //   showAlert("Light mood has been enable "," Success ");
    // }
   }
  return(
<>

  {/* <Navbar title= "Textutils" mode={mode} toggleMode={toggleMode}/> 
 <Alert alert={alert}/>
  <div className="container my-3">
  
      <TextForm showAlert ={showAlert} heading =" Enter the text to visulize" mode={mode}/>
        
     
   
  </div> */}
   <Main> 
    <Navbar title= "Textutils" mode={mode} toggleMode={toggleMode}/> 
 <Alert alert={alert}/>
   <div className="container my-3"> 
   
  
   <Routes>
  
  <Route path="/about" element={<About mode={mode}/>} />

 <Route path='/' element={<TextForm showAlert={showAlert} heading="TextUtilis: Your Voice in Words - Count, Convert, and Copy with Ease!" mode={mode} />}/>
 </Routes> 
      </div>
      </Main>
  
 
  
</>
  );
}

export default App;
