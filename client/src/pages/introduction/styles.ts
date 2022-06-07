import styled from 'styled-components';
import { NoirProSemiBoldWoff, NoirProSemiBoldWoff2, NoirProRegularWoff, NoirProRegularWoff2, NoirProLightWoff, NoirProLightWoff2 } from '../../assets/index'

export const Back = styled.div`

    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: space-around;
    
    background: #0B0B0B;

    @font-face {
    font-family: 'Noir Pro SemiBold';
    src: url(${NoirProSemiBoldWoff}) format('woff'),
         url(${NoirProSemiBoldWoff2}) format('woff2'); 
    }

    @font-face {
        font-family: 'Noir Pro Regular';
        src: url(${NoirProRegularWoff}) format('woff'),
            url(${NoirProRegularWoff2}) format('woff2'); 
    }

    @font-face {
        font-family: 'Noir Pro Light';
        src: url(${NoirProLightWoff}) format('woff'),
            url(${NoirProLightWoff2}) format('woff2'); 
    }

    @media screen and (max-width: 1000px){
        width: 100%;
        height: 30vh;
        
    }


`;

export const Image = styled.div`

    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    img{
        width: 550px;
        height: 650px;
    }

    @media screen and (max-width: 1000px){
        display: none;
    }
  
`;

export const Texts = styled.div`

    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {

        height: fit-content;

        font-family: 'Noir Pro SemiBold';
        font-style: normal;
        font-weight: 600;
        font-size: 68px;
        line-height: 82px;

        color: #FFFFFF;

        @media screen and (max-width: 1000px){
            font-size: 44px;
            height: fit-content;
            line-height: 53px;
        
        }

    }

    p {

        height: fit-content;
        width: 30vh;
        display: flex;

        font-family: 'Noir Pro Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;

        color: #FFFFFF;

        @media screen and (max-width: 1000px){
            font-size: 18px;
            height: 8vh;
            font-family: 'Noir Pro Light';
            align-items: center;
        
        }
    }

    @media screen and (max-width: 1000px){
        height: 25vh;
        
    }

`;

export const IntroductionStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 85vh;
    background: #0B0B0B;

    video{

    width: 935px;
    height: 526px;
    }

    @media screen and (max-width: 1000px){

        width: 100%;
        height: 30vh;

        video{

            width: 326px;
            height: 183.4px;
        }


    }

`;

export const SetaStyled = styled.div`
    
    height: 2vh;
    width: 4vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6px;

    @media screen and (max-width: 1000px){
        display: none;
        
    }
    
`;

export const SetaStyled2 = styled.div`
    
   display:none;
   height: 4vh;
   width: 5vh;

    @media screen and (max-width: 1000px){

        display: flex;
        height: 4vh;
        width: 3vh;
        align-items: center;
        justify-content: center;

        
    }
    
`;

