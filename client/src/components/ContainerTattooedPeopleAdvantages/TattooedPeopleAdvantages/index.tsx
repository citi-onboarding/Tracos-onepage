import React from "react";
import { Box, Card, CardImage, CardTitle, CardText, Line, Title, Teste} from "./style";

type CardProps = {
    image?: string;
    title?: string;
    text?: string;
};

export const TattooedPeopleAdvantagesTitle: React.FC = () =>{
    return(
        <Title>
            <span className="teste1">Para quem</span> 
            <span className="teste2">procura</span>
            <span className="teste1">traços</span>
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