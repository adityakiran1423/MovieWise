import './App.css';
import './Components/About.css'
import './Components/About';

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import PricingPage from './Components/Pricing';
import About from './Components/About';
import Recommendations from './Components/Recommendations';
import Login from './Components/Login';


function App() {
    return (
      <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<About/>} />
          <Route exact path= '/recomend'element={<Recommendations/>}/>
          <Route exact path='/pricing' element={<PricingPage/>} />
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
    );
  }


export default App;
