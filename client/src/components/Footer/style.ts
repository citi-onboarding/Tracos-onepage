import styled from 'styled-components';
import { themeTRS } from '../../styles/theme';
import { NoirProLightRegularWoff, NoirProLightRegularWoff2, NoirProItalicWoff, NoirProItalicWoff2 } from '../../assets'

export const Container = styled.div`
    @font-face {
        font-family: 'Noir Pro Regular';
        src: url(${NoirProLightRegularWoff2}) format('woff2'),
            url(${NoirProLightRegularWoff}) format('woff'); 
    }
    @font-face {
        font-family: 'Noir Pro Bold Italic';
        src: url(${NoirProItalicWoff2}) format('woff2'),
             url(${NoirProItalicWoff}) format('woff'); 
    }

    width: 100%;
    height: 551px;
    background-color: ${themeTRS.colors.backgroundFooter};
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: ${themeTRS.colors.text};
    font-family: 'Noir Pro Regular';

    @media (max-width: 1000px) {
        height: 565px;
        p {
            color: #0B0B0B;
        }
        hr{
            border: 1px solid #0B0B0B;
        }
        img, h1{
            display: none;
        }
    }
`;

export const Box = styled.div`
    height: 119px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 35.5px;
    h1{
        color: white;
        font-size: 55px;
        font-family: 'Noir Pro Bold Italic'; 
        font-weight: 600;
        margin-right: 80px;
    }
`;

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 120px 0px 0;
    p{
        font-weight: 500;
        font-size: 18px;
    }
    img{
        width: 22px;
        height: 24px;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 24px;
    gap: 24px;
`;

export const Line = styled.hr`
    border: 0.5px groove ${themeTRS.colors.line};
`;

export const Copyright = styled.div`
    height: 68px;
    display: flex;  
    align-items: center;
    justify-content: space-between;
    line-height: 19px;
    p{
        font-weight: 400;
        font-size: 16px;
        margin: 0 120px 0 120px;
    }
    img{
        width: 24px;
        height: 14px;
    }
`;

export const Teste = styled.div`
    width: 270px;
    height: 69px;
    margin-left: 120px;
    p{
        font-size: 16px;
        margin: 0;
    }
`;