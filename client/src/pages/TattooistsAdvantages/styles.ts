import styled from 'styled-components';
import { NoirProMediumWoff2, NoirProMediumWoff, NoirProMediumItalicWoff, NoirProMediumItalicWoff2 } from '../../assets/index';

export const Title = styled.div`

 @font-face {
    font-family: 'Noir Pro Medium';
    src: url(${NoirProMediumWoff2}) format('woff2'),
         url(${NoirProMediumWoff}) format('woff'); 
  }

    position: absolute;
    width: 800px;
    height: 66px;
    margin-top: 5vh;
    margin-left: 77vh;

    font-family: 'Noir Pro Medium', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 55px;
    line-height: 66px;

    color: #000000;

    span{
        @font-face {
            font-family: 'Noir Pro Medium Italic';
            src: url(${NoirProMediumItalicWoff2}) format('woff2'),
                url(${NoirProMediumItalicWoff}) format('woff'); 
        }
        font-family: 'Noir Pro Medium Italic', sans-serif;
        font-weight: 500;
    }
`;

export const Line = styled.div`
    position: absolute;
    height: 0px;
    width: 100%; 
    border: 1px solid #0B0B0B;
`;

export const CardTitle = styled.h1`
    display:flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
    color: #0B0B0B;
    
`;

export const CardDescription = styled.p`
    font-size: 14px;
    font-family: 'Barlow', sans-serif;
    font-weight: 300;
    color: #0B0B0B;
`;

export const CardImage = styled.img`
    
`;


export const Edge = styled.div`

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 32px;
    gap: 24px;

    width: 329px;
    height: 350px;

    border: 1px solid #0B0B0B;
    margin-top: 23vh;

    :hover{
        background-color: black;
        
    }
    :hover h1{
        color: white;
    }
    :hover p{
        color: white;
    }

    :hover span{
        background-color: white;
    }
    
`;

export const LineTitle = styled.span`
    background-color: black;
    width: 24px;
    height: 1.1px;

`;



