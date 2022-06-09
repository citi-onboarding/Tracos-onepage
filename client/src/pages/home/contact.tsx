import React from "react";
import { HomeContainer } from './styles';
import { Contact } from '../../components';

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Contact/>
        </HomeContainer>
    );
}