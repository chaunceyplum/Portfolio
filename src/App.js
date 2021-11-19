import './CSS/styles.css';
import Mynav from './components/Nav'
import React, { Component,  } from 'react'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Lobby from './components/Lobby';
import Resume from './components/Resume'



export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  
  
  render() {

    return (
      <div>
          <Mynav />

            <Routes > 

              <Route exact path ="/" element={<Lobby />}  />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/resume" element={<Resume />} />
               
            </Routes>
            
            <Footer  className="fixed-bottom"/>
      </div>


      
    )
  }
}



