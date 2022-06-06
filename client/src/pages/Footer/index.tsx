import { 
    Box,
    Container,
    Copyright, 
    Line,
    Social,
    SocialIcons,
    Teste
} from "./style"

import { AppleIcon, CitiIcon, Heart, InstagramIcon, PlayStoreIcon, TwitterIcon } from "../../assets" 

export const Footer = () => {
    return (
        <Container>
            <Box>
                <Teste>
                    <p>Av. Jornalista, Cidade Universitária,
                    Recife – PE</p>
                    <p>(81) 98639-9465</p>
                </Teste>
                <h1>TRS</h1>
                <Social>
                    <p>Onde nos encontrar</p>
                    <SocialIcons>
                    <a href="" target="_blank"><img src={AppleIcon} alt="instagram icon"/></a>
                    <a href="" target="_blank"><img src={PlayStoreIcon} alt="instagram icon"/></a>
                    <a href="" target="_blank"><img src={InstagramIcon} alt="instagram icon"/></a>
                    <a href="" target="_blank"><img src={TwitterIcon} alt="twitter icon"/></a>
                    </SocialIcons>
                </Social>
            </Box>
            <Line></Line>
            <Copyright>
                <p>© Copyright 2022 Traços | Todos os direitos reservados</p>
                <p>Made with &lt; / &gt; and <img src={Heart} alt="heart icon"/> by <img src={CitiIcon} alt="Citi icon"/></p>
            </Copyright>
        </Container>
    )

};