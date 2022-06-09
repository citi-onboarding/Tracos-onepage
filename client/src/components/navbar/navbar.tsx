import React from 'react';
import NavbarDesktop from './navbarDesktop';
import NavbarMobile from './navbarMobile';

const Navbar: React.FC = () => {
    return (
        <div>
            <NavbarDesktop/>
            <NavbarMobile/>
        </div>
    );
}

export default Navbar;