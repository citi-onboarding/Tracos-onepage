import { 
    Box,
    Container,
    Copyright, 
    Line,
    Social,
    SocialIcons,
} from "./style"

import { CitiIcon, Heart, InstagramIcon, TwitterIcon } from "../../assets" 

export const Footer = () => {
    return (
        <Container>
            <Box>
                <h1>TRS</h1>
                <Social>
                    <p>Onde nos encontrar</p>
                    <SocialIcons>
                    <a href="" target="_blank"><img src={InstagramIcon} alt="instagram icon"/></a>
                    <a href="" target="_blank"><img src={TwitterIcon} alt="twitter icon"/></a>
                    </SocialIcons>
                </Social>
            </Box>
            <Line></Line>
            <Copyright>
                <p>Todos os direitos reservado</p>
                <p>Made with &lt; / &gt; and <img src={Heart} alt="heart icon"/> by <img src={CitiIcon} alt="Citi icon"/></p>
            </Copyright>
        </Container>
    )

}