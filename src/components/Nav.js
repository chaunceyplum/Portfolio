import React, {useState} from 'react';
import { Nav, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, Navbar, Container } from 'reactstrap';

import { FaFolder, FaHome } from 'react-icons/fa';


const Mynav = (props) => {
    
    const [isOpen, setOpen] = useState(false);
    
    const toggle = () => setOpen(!isOpen);
    
    return (
        <div  >
             <Navbar  sticky="top" dark className ="navbar bg spacer sticky-top nav" >
                
                    <Container >
                        <NavbarBrand className="unstyle" to="/home">
                            <a className="unstyle" href="/" tooltip="/">
                                <h4 className="unstyle ">
                                    CP
                                </h4>
                            </a>
                        </NavbarBrand>
                    
                    
                    

                        <NavbarToggler className="" onClick={toggle} />

                        <Collapse isOpen={isOpen} navbar  >
                            <Nav className=" justify-content-center" bsStyle="pills" navbar>
                                <NavItem className="nav-link">
                                    <NavLink className="d-flex justify-content-center text-white" href="/home">
                                        <FaHome/>
                                        {` Home`}
                                    </NavLink>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <NavLink className="d-flex justify-content-center text-white" href="/resume">
                                        <FaFolder/>
                                         Resume
                                    </NavLink>
                                </NavItem>
                                
                                
                                
                                
                                    
                            </Nav>
                        </Collapse>
                    </Container>
                
            </Navbar> 
        

        
            
        </div>
    )
}

export default Mynav
