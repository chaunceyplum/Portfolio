import './CSS/styles.css';
import Mynav from './components/Nav'
import React, { Component,  } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Footer from './components/Footer';
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './components/Home'
import Lobby from './components/Lobby';
import ParticleBG from './components/ParticleBG';

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
    const Lobbypage = () => {
      return(
        <Lobby />
      )
    }    
    
    
    return (
      <div>
          
            <HashRouter>
              <Mynav />
                <Switch > 
                  
                  <Route path ="/home#" component={Homepage} />
                  <Route path ="/lobby" component={Lobbypage} />
                  {/* <Redirect to="/lobby" /> */}
                </Switch>
              <Footer  className="fixed-bottom"/>
            </HashRouter> 
          
        
      </div>


      
    )
  }
}



