import React from "react";
import { HomeContainer } from './styles';
import { Tattooists } from '../../components';

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Tattooists />
        </HomeContainer>
    );
}