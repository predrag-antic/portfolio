import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
   
    render() {
        return(
            <div className="mx-5 mt-4">
                <Navbar color="faded" light expand="md">
                <NavbarBrand tag={Link} to="/home" style={{color:'white'}}>
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/redux-logo-black-and-white.png" style={{width:'40px'}}></img>
                </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/works" style={{fontSize:"24px",color:'white'}} className="mr-2">Works</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/about" style={{fontSize:"24px",color:'white'}}>About</NavLink>
                    </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/contact"style={{color:'white'}}>Contact</NavLink>
                    </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;