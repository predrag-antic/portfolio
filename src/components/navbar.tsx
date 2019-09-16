import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../style/imageGrid.css';

class NavBar extends React.Component{
   
    render() {
        return(
            <div className="mx-5 mt-4">
                <Navbar color="faded" light expand="md">
                <NavbarBrand tag={Link} to="/home" style={{color:'white'}}>
                    <img src={require(`../assets/redux-logo-black-and-white.png`)} alt="" style={{width:'40px'}}></img>
                </NavbarBrand>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/works" style={{fontSize:"24px",color:'white',fontFamily:"BEBAS"}} className="mr-3 navHover">Works</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/about" style={{fontSize:"24px",color:'white',fontFamily:"BEBAS"}} className="navHover">About</NavLink>
                    </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/contact"style={{fontSize:"18px",color:'white',fontFamily:"BEBAS"}} className="navHover">Contact</NavLink>
                    </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default NavBar;