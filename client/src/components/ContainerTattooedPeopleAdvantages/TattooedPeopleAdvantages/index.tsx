import React from "react";
import { Box, Card, CardImage, CardTitle, CardText, Line, Title } from "./style";

type CardProps = {
    image?: string;
    title?: string;
    text?: string;
};

export const TattooedPeopleAdvantagesTitle: React.FC = () =>{
    return(
        <Title> 
            <div>
                Para quem <span>procura</span> traços 
            </div>
        </Title>
    )
};

export const TattooedPeopleAdvantages: React.ElementType = ({ image, text, title}: CardProps) =>{

    return(
        <Box>
            <Card>
                <CardTitle><Line></Line>{title}</CardTitle>
                <CardImage src={image}/>
                <CardText>{text}</CardText>
            </Card>
        </Box>
    )
}; 

export default TattooedPeopleAdvantages;