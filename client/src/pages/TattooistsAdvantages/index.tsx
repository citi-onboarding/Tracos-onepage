import React from "react";
import { Card } from "../../components";
import { Title, Container, SectionContainer } from './styles';
import { Foto1, Foto2, Foto3 } from "../../assets";



export const TattooistsAdvantages: React.FC = () =>{
    return(

        <SectionContainer>
            <Title>Para quem <i>marca</i></Title>
            <Container>
                <Card
                title = "Feature 00"
                image = {Foto2}
                description = "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta."
                />
                <Card
                title = "Feature 00"
                image = {Foto1}
                description = "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta."
                />
                <Card
                title = "Feature 00"
                image = {Foto3}
                description = "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta."
                />
            </Container>
        </SectionContainer>

        
    )
}