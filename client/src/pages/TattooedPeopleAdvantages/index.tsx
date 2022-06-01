import React from "react";
import { Card, CardImage, CardTitle, CardText, Container, Title} from "./style";

type CardProps = {
    image?: string;
    title?: string;
    text?: string;
};

export const TattooedPeopleAdvantagesTitle: React.FC = () =>{
    return(
        <Title>Para quem procura traços</Title>
    )
}
export const TattooedPeopleAdvantages: React.ElementType = ({ image, text, title }: CardProps) =>{
    return(
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardImage src={image}/>
            <CardText>{text}</CardText>
        </Card>
    )
} 

export default TattooedPeopleAdvantages;