import React from "react";
import { Edge, CardTitle, LineTitle, CardDescription, CardImage} from "./styles";

type CardProps = {
    image?: string;
    title?: string;
    description?: string;
};

export const Card: React.ElementType = ({title, image, description}: CardProps) =>{
    return( 
        <Edge>
            <CardTitle><LineTitle></LineTitle>{title}</CardTitle>

            <CardImage src={image} alt="imagem" />

            <CardDescription>{description}</CardDescription>
        </Edge>   
    )
}

