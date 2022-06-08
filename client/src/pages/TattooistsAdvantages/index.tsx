import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Card } from "../../components";
import { Title, Container, SectionContainer } from './styles';

type tattooistsAdvantages = {
    title: string;
    img: string;
    description: string;
};

export const TattooistsAdvantages: React.FC = () =>{
    const [infos, setInfos] = useState <tattooistsAdvantages[]> ();

    const getInfos = async () => {
        const response = await api.get('/tattooArtistsAdvantages');
        setInfos(response.data);
        console.log(response.data);
    }

    useEffect (() => {
        getInfos();
    }, []) 

    return(

        <SectionContainer>
            <Title>Para quem <i>marca</i></Title>
            <Container>
                <Card
                title = {infos&&infos[0].title}
                image = {infos&&infos[0].img}
                description = {infos&&infos[0].description}
                />
                <Card
                title = {infos&&infos[1].title}
                image = {infos&&infos[1].img}
                description = {infos&&infos[1].description}
                />
                <Card
                title = {infos&&infos[2].title}
                image = {infos&&infos[2].img}
                description = {infos&&infos[2].description}
                />
            </Container>
        </SectionContainer>
 
    )
}