import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
 import "./Header.css"
const  Header=()=> {
    const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div >
    <Navbar className='headerportfolio' light >
      <NavbarBrand href="/" className="mr-auto"  style={{color:"rgb(176, 42, 253)"}}>
            
                  <ul className="mainlists">
              
                      <li className="imglogo">
                      <img src="\209994540_177752471033893_7941265677326244466_n.jpg" width="250" height="140" alt="" />
                      </li>
                      <li className="listofheadernumber">+92 3122624846</li>
                        
                      <li className="listofheader">Home</li>
                      <li className="listofheader">About Me</li>
                      <li className="listofheader">Skills</li>
                      <li className="listofheader">Work</li>
                      <li className="listofheader">
                          
                    <button className='btn btn-outline-danger' style={{borderRadius:20}}>Contact Me</button>    
                          
                          </li>
                   
                  </ul>
             
                   
                    
           
           
      </NavbarBrand>
      {/* <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
          </NavItem>
        </Nav>
      </Collapse> */}
    </Navbar>
  </div>
  )
}
export default Header;