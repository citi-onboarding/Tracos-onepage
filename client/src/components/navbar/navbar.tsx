import React from 'react';
import { StyledNavbar } from './styles';
import { rightArrow } from '../../assets';

const Navbar: React.FC = () => {
    return (
        <StyledNavbar>
            <div className="content">

            <strong className="title">Traços</strong>

            <div className="navbar-links">
                <a href="#home" className="navbar-link">Início</a>
                <a href="#aboutUs" className="navbar-link">Sobre nós</a>
                <a href="#tattoists" className="navbar-link">Tatuadores</a>
            </div>

            <a className="contact-link" href="#contact">
                Fale Conosco
                <img src={ rightArrow } alt="seta"/>    
            </a>

            </div>
        </StyledNavbar>
    );
    
}

export default Navbar;