import React, { useState } from 'react';
import { StyledNavbar } from './styles';
import { rightArrow } from '../../assets';
const $ = require('jquery');

const home = <a href="#" className="navbar-link">Início</a>
const boldHome = <a href="#" className="navbar-link bold-link">Início</a>
const aboutUs = <a href="#videoTatuadores" className="navbar-link">Sobre nós</a>
const boldAboutUs = <a href="#videoTatuadores" className="navbar-link bold-link">Sobre nós</a>
const tattooistsDiv = <a href="#tattooists" className="navbar-link">Tatuadores</a>
const boldTattooists = <a href="#tattooists" className="navbar-link bold-link">Tatuadores</a>

const Navbar: React.FC = () => {
    const [position, setPosition] = useState(0);

    $(window).scroll(() => {
        let scrollTop = $(window).scrollTop(); 
        
        if (scrollTop >= 1250) {
            setPosition(2)
        } else if (scrollTop >= 380){
            setPosition(1)
        } else {
            setPosition(0)
        }
    })

    return (
            <StyledNavbar>
                <div className="content">

                    <strong className="title">Traços</strong>

                    <div className="navbar-links">
                        {position === 0 ? boldHome : home}
                        {position === 1 ? boldAboutUs : aboutUs}
                        {position === 2 ? boldTattooists : tattooistsDiv}
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