import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";




function App(){
  return(
    <div>
      <Router> 
      <Routes>
        <Route path="/" element={<Loginpage/>} exact />
        <Route path="/Homepage" element={<Homepage/>} exact />
        
      </Routes>
       
    </Router>
    
    </div>
    
    
  );
}

export default App;