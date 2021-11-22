import './CSS/styles.css';
import Mynav from './components/Nav'
import React from 'react'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Lobby from './components/Lobby';
import Resume from './components/Resume'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NotFound from './components/NotFound';

const App = () => {
  
  
  
  return (
    <div>
      <Mynav />
      <TransitionGroup>
        <CSSTransition key={Location.key} classNames="page" timeout={300}>
          <Routes > 

            <Route exact path ="/" element={<Lobby />}  />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
          

      <Footer  className="fixed-bottom"/>
    </div>
  )
}

export default App


