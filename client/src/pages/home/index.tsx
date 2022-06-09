import React from "react";
import { HomeContainer } from './styles';
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components";
import { Introduction } from "../introduction";
const $ = require( "jquery" );

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Navbar/>
            <Introduction/>
            <Footer/>
        </HomeContainer>
    );
}

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
});