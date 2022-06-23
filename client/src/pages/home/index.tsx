import React from "react";
import { HomeContainer } from './styles';
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components";
import { Introduction } from "../../components/introduction";
import { TattooistsAdvantages } from "../../components";
import { Tattooists } from '../../components';
import { ContainerTattooedPeopleAdvantages } from "../../components";
import { TattooedPeopleAdvantagesTitle } from "../../components";
import { Contact } from "../../components";

const tattooistsContainer = <div id='tattooists'><Tattooists/></div>


export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Navbar/>
            <Introduction/>
            <TattooistsAdvantages/>
            {tattooistsContainer}
            <TattooedPeopleAdvantagesTitle/>
            <ContainerTattooedPeopleAdvantages/>
            <Contact/>
            <Footer/>
        </HomeContainer>
    );
}