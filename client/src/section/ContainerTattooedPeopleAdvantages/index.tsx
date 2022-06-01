import React from "react";
import { TattooedPeopleAdvantages } from "../../pages";
import { ImageAdvantage1, ImageAdvantage2, ImageAdvantage3 } from '../../assets'
import { Container } from "./style";

export const ContainerTattooedPeopleAdvantages: React.ElementType = () =>{
    return(
        <Container>
            <TattooedPeopleAdvantages 
            image={ImageAdvantage1} 
            title="Feature 00" 
            text="Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta."/>
            <TattooedPeopleAdvantages 
            image={ImageAdvantage2} 
            title="Feature 00" 
            text="Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta."/>
            <TattooedPeopleAdvantages 
            image={ImageAdvantage3} 
            title="Feature 00" 
            text="Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta."/>
      </Container>
    )
} 