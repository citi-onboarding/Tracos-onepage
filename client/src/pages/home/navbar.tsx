import React from "react";
import { HomeContainer } from './styles'
import { Navbar } from '../../components';
const $ = require( "jquery" );

// 'Oioi' is bringing the navbar together in the margin... why?
const Home: React.FC = () => {
    return (
        <div>
            <Navbar/>
                <HomeContainer id="homeContainer">           
                </HomeContainer>
        </div>
            
            );
}

// one thing left: get the divs and connect them to the link, make the respective navbar link text stronger (IMPORTANT!!!)
$(window).scroll(() => {
    let scrollTop = $(window).scrollTop();

    let divs = ['#homeContainer']

    divs.forEach(div => {
        let divTop = $(div).offset().top;
        let divStart;
        if (divTop - $(window).height() > 0) { divStart = divTop - $(window).height() } else { divStart = divTop };
        let divEnd = divTop + $(div).height();
    
        if  (scrollTop > divStart && scrollTop < divEnd) {
            console.log(`estou em ${div}`) // if div == introduction -> 'início' goes bold (and so it goes...)
        } // WORKSSSSSSSSSSS
    })

    
})

export { Home };