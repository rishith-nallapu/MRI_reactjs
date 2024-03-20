import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from './x-rays.png';
import styled from 'styled-components';

const Navbar = ({ children }) => {
    return (
        <>
            <Nav>
                <LogoContainer>
                    <Logo src={logoIcon} alt="Logo Icon" />
                    <LogoText>ScanSavvy</LogoText>
                </LogoContainer>

                <NavLinks>
                    <NavLink to="/files">X-Ray</NavLink>
                    <NavLink to="/files">MRI</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                </NavLinks>
            </Nav>
            <ContentBelowNavbar>{children}</ContentBelowNavbar>
        </>
    );
};

const ContentBelowNavbar = styled.div`
  padding: 20px;
`;

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.img`
    width: 35px; 
    height: 35px; 
    margin:0px 25px; 
    padding:4px;
    border-radius:50%;
    border:2px solid white;
`;

const LogoText = styled.h2`
    margin: 10px 0; 
`;

const NavLinks = styled.div`
margin-right:80px;
  display: flex;
  justify-content:space-evenly;
  gap: 60px;
  
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size:18px;
  &:hover{
    background-color:white;
    border-radius:6px;
    padding:5px;
    color:#3cb371;
    border:2px solid white;
  }
`;

export default Navbar;
