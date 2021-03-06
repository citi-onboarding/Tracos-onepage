import {
    Box, Div,
    Container,
    Copyright,
    Line,
    Social,
    SocialIcons,
    Address,
    LinkPrivacy,
    Privacy
} from "./style"
import { AppleIcon, CitiIcon, Heart, InstagramIcon, PlayStoreIcon, TwitterIcon } from "../../assets"
import api from "../../services/api";
import { useState, useEffect } from "react";
import React from "react";

type footerInfos = {
    address: string;
    linkAppleStore: string;
    linkGooglePlay: string;
    linkInstagram: string;
    linkPrivacy: string;
    linkTwitter: string;
    phone: string;
}

export const Footer = () => {
    const [infos, setInfos] = useState<footerInfos[]>();

    const getInfos = async () => {
        const response = await api.get('/footer');
        setInfos(response.data);
    }

    useEffect(() => {
        getInfos();
    }, [])

    return (
        <Container>
            <Div>
                <Box>
                    <Address>
                        <p>{infos&&infos[0].address}</p>
                        <p>{infos&&infos[0].phone}</p>
                    </Address>
                    <h1>TRS</h1>
                    <Social>
                        <p>Onde nos encontrar</p>
                        <SocialIcons>
                        <a href={infos&&infos[0].linkAppleStore} target="_blank"><img src={AppleIcon} alt="apple icon"/></a>
                        <a href={infos&&infos[0].linkGooglePlay} target="_blank"><img src={PlayStoreIcon} alt="play store icon"/></a>
                        <a href={infos&&infos[0].linkInstagram} target="_blank"><img src={InstagramIcon} alt="instagram icon"/></a>
                        <a href={infos&&infos[0].linkTwitter} target="_blank"><img src={TwitterIcon} alt="twitter icon"/></a>
                        </SocialIcons>
                    </Social>
                </Box>
                <Line></Line>
                <Copyright>
                    <p>© Copyright 2022 Traços | Todos os direitos reservados 
                        <LinkPrivacy href= {infos&&infos[0].linkPrivacy} target="_blank"> | Política de privacidade </LinkPrivacy>
                    </p>
                    <Privacy><a href= {infos&&infos[0].linkPrivacy} target="_blank"> Política de privacidade </a></Privacy>
                    <p>Made with &lt; / &gt; and <img src={Heart} alt="heart icon"/> by <img src={CitiIcon} alt="Citi icon"/></p>
                </Copyright>
            </Div>
        </Container>
    )

};