import React from "react";
import { TattooedPeopleAdvantages } from "./TattooedPeopleAdvantages";
import { ImageAdvantage1, ImageAdvantage2, ImageAdvantage3 } from '../../assets'
import { Container } from "./style";
import { useState, useEffect } from "react";
import api from "../../services/api";

type tattoedPeopleInfos = {
    image: string;
    title: string;
    description: string;
}

export const ContainerTattooedPeopleAdvantages: React.ElementType = () =>{
    const [infos, setInfos] = useState<tattoedPeopleInfos[]>();

    const getInfos = async () => {
        const response = await api.get('/tattooedPeopleAdvantages');
        setInfos(response.data);
        console.log(response.data);
    }
    
    useEffect (() =>{
        getInfos();
    }, [])

    return(
        <Container>
            <TattooedPeopleAdvantages 
                image = {infos&&infos[0].image} 
                title = {infos&&infos[0].title}
                text = {infos&&infos[0].description}
            />
            <TattooedPeopleAdvantages 
                image = {infos&&infos[1].image} 
                title = {infos&&infos[1].title}
                text = {infos&&infos[1].description}
            />
            <TattooedPeopleAdvantages 
                image = {infos&&infos[2].image} 
                title = {infos&&infos[2].title}
                text = {infos&&infos[2].description}
            />
      </Container>
    )
};