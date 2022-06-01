import styled from "styled-components";
import { NoirProLightWoff, NoirProLightWoff2, NoirProRegularWoff, NoirProRegularWoff2, NoirProMediumWoff, NoirProMediumWoff2, NoirProSemiBoldItalicWoff, NoirProSemiBoldItalicWoff2 } from '../../assets';

const StyledNavbar = styled.nav`
    @font-face {
        font-family: 'Noir Pro Light';
        src: url(${NoirProLightWoff}) format('woff'),
            url(${NoirProLightWoff2}) format('woff2');
    }

    @font-face {
        font-family: 'Noir Pro Regular';
        src: url(${NoirProRegularWoff}) format('woff'),
            url(${NoirProRegularWoff2}) format('woff2');
    }

    @font-face {
        font-family: 'Noir Pro SemiBold Italic';
        src: url(${NoirProSemiBoldItalicWoff}) format('woff'),
            url(${NoirProSemiBoldItalicWoff2}) format('woff2');
    }
    

    position: fixed;

    justify-self: end;

    width: 100vw;
    height: 90px;
    background-color: #0B0B0B;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #FFFFFF;

    .content {
        width: 82vw;
        max-width: 1126px;
        height: 90px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        font-family: 'Noir Pro SemiBold Italic';
        font-style: italic;
        font-weight: 600;
        font-size: 44px;
        line-height: 53px;
    }

    .navbar-links {
        width: 312px;
        display: flex;

        justify-content: space-between;
        
    }

    .navbar-links a, .contact-link {
        color: #FFFFFF;
        text-decoration: none;

        font-family: 'Noir Pro Light';

        font-size: 18px;
        line-height: 22px;

        font-weight: 300;
    }

    .contact-link {
        width: 139px;
        height: 25px;

        display: flex;
        justify-content: space-between;
        align-content: center;

        font-weight: 400;
        line-height: 21.6px;
    }

    .contact-link img{
        height: 21.6px;
        width: 18px;
    }
`;

export { StyledNavbar };