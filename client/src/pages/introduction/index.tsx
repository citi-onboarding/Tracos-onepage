import React from "react";
import {
   Back,
   Texts,
   Image,
   ImageSeta,
   VideoStyle,
  
} from './styles';

import { IPhone, Seta, Video } from '../../assets'

export const Introduction: React.FC = () => {
    return (
        <Back>
            <Texts>
                <h1>Encontre <span>o seu</span><br></br> melhor traço</h1>
                <p>Saiba mais</p>
                
                <a href="#videoTatuadores" >
                    <ImageSeta src={Seta} alt="seta" />
                </a>
            </Texts>

            <VideoStyle src={Video} id="videoTatuadores"></VideoStyle>
            <Image src={IPhone} alt="iphone" />
            
            
        </Back>
      
    );
}