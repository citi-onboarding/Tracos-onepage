import styled from 'styled-components'; 
import { themeTRS } from '../../../styles/theme';
import { NoirProItalicWoff, NoirProItalicWoff2, NoirProRegularWoff, NoirProRegularWoff2} from '../../../assets';


export const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: #000;
    font-size: 55px;
    font-family: 'Noir Pro Regular';
    margin-bottom: 67px;
    span {
        font-family: 'Noir Pro Italic';
    }
    @media (max-width: 1000px) {
        font-size: 31px;
        text-align: center;
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
`;

export const Card = styled.div`
    width: 329px;
    height: 350px;  
    border: 1px solid #0B0B0B;
    padding: 15px 0 0 32px;
    font-family: 'Barlow';

    img{
        width: 265px;
        height: 142px;
    }
    
    :hover {
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
    :hover img{
        filter: invert(1);
    }

    @media (max-width: 1000px){
        width: 234px;
        height: 249px;
        img{
            width: 188.53px;
            height: 101.02px;
        }
    }
`;

export const CardImage = styled.img`
    margin: 33.95px 0 ;
    @media (max-width: 1000px){
        margin: 5px 0 27px 0;
    }
`;

export const CardTitle = styled.h1`
    font-size: 20px;
    font-weight: 500;
    color: ${themeTRS.colors.titleCard};
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const CardText = styled.p`
    font-size: 14px;
    font-weight: 300;
    color: ${themeTRS.colors.textBlack};
    @media (max-width: 1000px){
        font-size: 11.38px;
    }
`;

export const Line = styled.span`
    width: 24px;
    height: 1.1px;
    background-color: #000;
`;


