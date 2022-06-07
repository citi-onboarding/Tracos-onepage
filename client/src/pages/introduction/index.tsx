import React from "react";
import {
   Back,
   Texts,
   Image,
   IntroductionStyled,
   SetaStyled,
   SetaStyled2,
  
} from './styles';

import { IPhone, Seta, Seta2, Video } from '../../assets'

export const Introduction: React.FC = () => {
    return (
        <IntroductionStyled>
            <Back>
                <Texts>
                    <h1>Encontre <i>o seu</i><br></br> melhor traço</h1>
                    <p>
                        Saiba mais
                        <a href="#videoTatuadores" >
                            <SetaStyled>
                            <img src={Seta} alt="seta" />
                            </SetaStyled>
                            <SetaStyled2>
                            <img src={Seta2} alt="seta2" />
                            </SetaStyled2>
                        </a>
                    </p>
                </Texts>
                <Image>
                    <img src={IPhone} alt="iphone" />
                </Image>
            </Back>
            <video src={Video} id="videoTatuadores"/>
        </IntroductionStyled>
           
    );
}