import styled from 'styled-components'; 
import { themeTRS } from '../../../styles/theme';
import { NoirProItalicWoff, NoirProItalicWoff2, NoirProRegularWoff, NoirProRegularWoff2} from '../../../assets';


export const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: #000;
    font-family: 'Noir Pro Regular';
    margin-top: 139px; 
    span{
        margin: 0 12px 0 12px;
        font-family: 'Noir Pro Italic';
    }
`;

export const Box = styled.div`
    @font-face {
        font-family: 'Noir Pro Regular';
        src: url(${NoirProRegularWoff2}) format('woff2'),
            url(${NoirProRegularWoff}) format('woff'); 
    }
    @font-face {
        font-family: 'Noir Pro Italic';
        src: url(${NoirProItalicWoff2}) format('woff2'),
            url(${NoirProItalicWoff}) format('woff'); 
    } 
    :hover{
        background-color: ${themeTRS.colors.backgroundHover};
    }
    :hover h1{
        color: ${themeTRS.colors.textHover};
    }
    :hover p {
        color: ${themeTRS.colors.textHover};
    }
    :hover span{
        background-color: ${themeTRS.colors.textHover};
    }
`;

export const Card = styled.div`
    width: 329px;
    height: 350px;  
    
    border: 1px solid #0B0B0B;
    padding: 15px 0 0 32px;
    img{
        width: 265px;
        height: 142px;
    }
    transition: 1s;
    font-family: 'Barlow';
`;

export const CardImage = styled.img`
    margin: 33.95px 0 ;
`;

export const CardTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color: ${themeTRS.colors.titleCard};
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 1s;
`;

export const CardText = styled.p`
    font-size: 14px;
    color: ${themeTRS.colors.text};
    transition: 1s;
`;

export const Line = styled.span`
    width: 24px;
    height: 1.1px;
    background-color: #000;
    transition: 1s;
`;


