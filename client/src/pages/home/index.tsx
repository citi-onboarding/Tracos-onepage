import React from "react";
import { HomeContainer } from './styles';
import { ContainerTattooedPeopleAdvantages } from "../../components";
import { TattooedPeopleAdvantagesTitle } from "../../components";

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <TattooedPeopleAdvantagesTitle/>
            <ContainerTattooedPeopleAdvantages/>
        </HomeContainer>
    );
}