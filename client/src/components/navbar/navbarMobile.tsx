import React, { useState } from 'react';
import { MobileNavbar } from './styles';
import { rightArrow, menuIcon, closeMenuIcon } from '../../assets';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const animateFrom = {opacity: 0, x: 100}
    const animateFromContainer = {opacity: 0, x: 500}
    const animateTo = {opacity: 1, x: 0}

    const [open, setOpen] = useState(false);

    const openIcon = <img onClick={() => setOpen(!open)} src={ menuIcon } alt="menu" className='menuIcon'/>;
    const closeIcon = <motion.img initial={animateFrom} animate={animateTo} transition={{delay: .3}} onClick={() => setOpen(!open)} src={ closeMenuIcon } alt="menu" className='menuIcon'/>;

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
                                    <motion.a 
                                    onClick={() => setOpen(!open)} href="#home" className="menu-link" key="link-1"
                                    initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .3}} exit={animateFrom}>
                                        Início
                                    </motion.a>
                        
                                    <motion.a 
                                    onClick={() => setOpen(!open)} href="#aboutUs" className="menu-link" key="link-2"
                                    initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .35}} exit={animateFrom}>
                                        Sobre nós
                                    </motion.a>
                        
                                    <motion.a 
                                    onClick={() => setOpen(!open)} href="#tattoists" className="menu-link" key="link-3"
                                    initial={animateFrom} animate={animateTo} transition={{type: 'spring', bounce: .3, delay: .4}} exit={animateFrom}>
                                        Tatuadores
                                    </motion.a>
                                    
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