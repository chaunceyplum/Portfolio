import './CSS/styles.css';
import Mynav from './components/Nav'
import React, { Component,  } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/Footer';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home'

library.add(fab, faCheckSquare, faCoffee)

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  
  
  render() {
    

    const Homepage = () => {
      return(
        <Home />
      )
    }    
    
    
    return (
      <div>
        
          <BrowserRouter>
            <Mynav />
              <Switch > 
                
                <Route path ="/home" component={Homepage} />

                <Redirect path="/home" />
              </Switch>
            <Footer  className="fixed-bottom"/>
          </BrowserRouter> 
        
      </div>


      
    )
  }
}



