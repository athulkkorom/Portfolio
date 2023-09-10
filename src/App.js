import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import SocialMedia from './Components/SocialMedia';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
function App() {
  return(
  <div>
 <NavBar /> 
  <Home />    
  <About />  
  <Experience />
  <Contact />

 <SocialMedia />
     </div>

  );
}

export default App;
