import React from "react";
import { TattooistsAdvantages } from '../../pages';
import { Foto1, Foto2, Foto3 } from "../../assets";
import { Container } from "./styles";


export const Card: React.ElementType = () =>{
    return(
    <Container>
        <TattooistsAdvantages
        title = "Feature 00"
        image = {Foto2}
        description = "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta."
        />
        <TattooistsAdvantages
        title = "Feature 00"
        image = {Foto1}
        description = "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta."
        />
        <TattooistsAdvantages
        title = "Feature 00"
        image = {Foto3}
        description = "Lorem ipsum dolor sit amet, cons ectetur adipiscing elit. Donec faucibus odio sit amet sollicitudin porta."
        />
    </Container>
       
    )
} 