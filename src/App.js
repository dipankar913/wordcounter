//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   //Switch,
//   Route,
//   //Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enable or not  
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) =>{
      setAlert({
        msg: massage,
        types: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

 const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0d0b16';
      showAlert("Dark mode Enabled", "success");
      document.title = 'WordCounter-Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
     showAlert("Light mode Enabled","success");
     document.title = 'WordCounter-Light mode';
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title= "WordCounter  " aboutText="About Us" home="Home" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3" >

     {/* <Routes>
          <Route exact path="/about" element={<About/>}>
            
          </Route>
          
          <Route exact path="/" element={ <Textform showAlert = {showAlert} heading="Enter the text to analyze below"  mode={mode}/> }> 
           
           </Route>
    </Routes>
    
    </div> 
     </Router>  */}
    <Textform showAlert = {showAlert} heading="Wordcounter with character counter, Remove extra spaces, lower to upper case and upper to lower case converter.."  mode={mode}/> 
    </div>
    </>
  );
}

export default App;

