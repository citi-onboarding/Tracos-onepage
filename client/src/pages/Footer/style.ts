import styled from 'styled-components';
import { themeTRS } from '../../styles/theme';
import { 
    NoirProLightRegularWoff, NoirProLightRegularWoff2,
    NoirProItalicWoff, NoirProItalicWoff2 
} from '../../assets/index'

export const Container = styled.div`
    @font-face {
        font-family: 'Noir Pro Regular';
        src: url(${NoirProLightRegularWoff2}) format('woff2'),
            url(${NoirProLightRegularWoff}) format('woff'); 
    }
    @font-face {
        font-family: 'Noir Pro Bold Italic Regular';
        src: url(${NoirProItalicWoff2}) format('woff2'),
             url(${NoirProItalicWoff2}) format('woff'); 
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
        font-family: 'Noir Pro Bold Italic Regular'; 
        font-weight: 600;
        margin-left: 120px;
    }
`;

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 120px 50px 0;
    p{
        font-weight: 500;
        font-size: 18px;
    }
    img{
        width: 24px;
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
    border: 0.5px solid #BBBBBB;
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
`;
