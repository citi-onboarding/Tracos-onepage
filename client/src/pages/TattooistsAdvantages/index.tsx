import React from "react";
import { Title, CardImage, CardTitle, CardDescription, Edge, Line } from './styles';

type CardProps = {
    image?: string;
    title?: string;
    description?: string;
};

export const TattooistsAdvantagesTitle: React.FC = () =>{
    return(
        <>
        <Line></Line>
        <Title>Para quem <span>marcam</span></Title>
        </>
    )
}


export const TattooistsAdvantages: React.ElementType = ({title, image, description}: CardProps) =>{
    return( 
        <Edge>
            <CardTitle>{title}</CardTitle>

            <CardImage src={image} alt="imagem" />

            <CardDescription>{description}</CardDescription>
        </Edge>   
    )
}





           
 