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
    margin: 7vh 0vh 0vh 75vh;

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

export const CardTitle = styled.div`
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
    color: #0B0B0B;
`;

export const CardDescription = styled.div`
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
    margin-top: 170px;
    
`;




