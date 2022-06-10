import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Seta, Seta2 } from '../../assets'

import {
   Back,
   Texts,
   Image,
   IntroductionStyled,
   SetaStyled,
   SetaStyled2,
  
} from './styles';

type introduction = {
    image: string;
    video: string;
    link: string;
};

export const Introduction: React.FC = () => {

    const [infos, setInfos] = useState <introduction[]> ();

    const getInfos = async () => {
        const response = await api.get('/introduction');
        setInfos(response.data);
    }

    useEffect (() => {
        getInfos();
    }, []) 

    return (
        <IntroductionStyled>
            <Back>
                <Texts>
                    <h1>Encontre <span>o seu</span><br></br> melhor traço</h1>
                    <div className='about'>
                        Saiba mais
                        <a href={infos&&infos[0].link} >
                            <SetaStyled>
                            <img src={Seta} alt="seta" />
                            </SetaStyled>
                            <SetaStyled2>
                            <img src={Seta2} alt="seta2" />
                            </SetaStyled2>
                        </a>
                    </div>
                </Texts>
                <Image>
                    <img src={infos&&infos[0].image} alt="iphone" />
                </Image>
            </Back>
            <video src={infos&&infos[0].video} id="videoTatuadores"/>
        </IntroductionStyled>
           
    );
}