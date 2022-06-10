import React, { useState } from 'react';
import { MobileNavbar } from './styles';
import { rightArrow, menuIcon, closeMenuIcon } from '../../assets';
import { motion, AnimatePresence } from 'framer-motion';
const $ = require('jquery');

const animateFrom = {opacity: 0, x: 100}
const animateFromContainer = {opacity: 0, x: 500}
const animateTo = {opacity: 1, x: 0}

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState(0);

    const home =  <motion.a 
                onClick={() => setOpen(!open)} href="#" className="menu-link" key="link-1"
                initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .3}} exit={animateFrom}>
                Início
            </motion.a>

    const boldHome =  <motion.a 
                onClick={() => setOpen(!open)} href="#" className="menu-link bold-link" key="link-1"
                initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .3}} exit={animateFrom}>
                Início
            </motion.a>
    
    const aboutUs = <motion.a 
                onClick={() => setOpen(!open)} href="#videoTatuadores" className="menu-link" key="link-2"
                initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .35}} exit={animateFrom}>
                Sobre nós
            </motion.a>

    const boldAboutUs = <motion.a 
                onClick={() => setOpen(!open)} href="#videoTatuadores" className="menu-link bold-link" key="link-2"
                initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .35}} exit={animateFrom}>
                Sobre nós
            </motion.a>

    const tattooistsDiv = <motion.a 
                onClick={() => setOpen(!open)} href="#tattooists" className="menu-link" key="link-3"
                initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .4}} exit={animateFrom}>
                Tatuadores
            </motion.a>

    const boldTattoists = <motion.a 
                onClick={() => setOpen(!open)} href="#tattooists" className="menu-link bold-link" key="link-3"
                initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .4}} exit={animateFrom}>
                Tatuadores
            </motion.a>
                            

    const openIcon = <img onClick={() => setOpen(!open)} src={ menuIcon } alt="menu" className='menuIcon'/>;
    const closeIcon = <motion.img initial={animateFrom} animate={animateTo} transition={{delay: .3}} onClick={() => setOpen(!open)} src={ closeMenuIcon } alt="menu" className='menuIcon'/>;

    $(window).scroll(() => {
        let scrollTop = $(window).scrollTop(); 
        
        if (scrollTop >= 600) {
            setPosition(2)
        } else if (scrollTop >= 130){
            setPosition(1)
        } else {
            setPosition(0)
        }
    })

    return (
        <MobileNavbar>
            <strong className="title">TRS</strong>

            {open ? closeIcon : openIcon}

            <AnimatePresence>
                {open && 
                    <motion.div 
                    initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .25}} exit={animateFromContainer} key='links-container'
                    className="menu-links">
                            <div className="links-container">
                                    {position === 0 ? boldHome : home}
                        
                                    {position === 1 ? boldAboutUs : aboutUs}
                        
                                    {position === 2 ? boldTattoists : tattooistsDiv}
                                    
                                    <motion.a 
                                    onClick={() => setOpen(!open)} className="menu-link contact-link" href="#contact" key="link-4"
                                    initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .45}} exit={animateFrom}>
                                        Fale Conosco
                                        <img src={ rightArrow } alt="seta"/>
                                </motion.a>
                            </div>  
                    </motion.div>
                }
            </AnimatePresence>
        </MobileNavbar>
    );
}

export default Navbar;