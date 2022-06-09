import styled from 'styled-components';
import { contactBackground, NoirProLightWoff, NoirProLightWoff2, NoirProRegularWoff, NoirProRegularWoff2, NoirProMediumWoff, NoirProMediumWoff2, NoirProRegularItalicWoff, NoirProRegularItalicWoff2 } from '../../assets';

// o strong span tá vermelho p lembrar de corrigir -> mudar pra regular e regular italiccc
export const ContactDiv = styled.div`
    
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
        font-family: 'Noir Pro Medium';
        src: url(${NoirProMediumWoff}) format('woff'),
            url(${NoirProMediumWoff2}) format('woff2');
    }

    @font-face {
        font-family: 'Noir Pro Regular Italic';
        src: url(${NoirProRegularItalicWoff}) format('woff'),
            url(${NoirProRegularItalicWoff2}) format('woff2');
    }

    width: 68.5vw;
    max-width: 935px;
    height: 469px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url(${contactBackground});

    form {
        width: 62vw;
        max-width: 833px;
        height: 368px;
        
        display: flex;
        flex-direction: column;

        align-items: center;

        justify-content: space-between;

        strong { 
            font-family: 'Noir Pro Regular';
            font-size: 44px;
            line-height: 53px;

            align-self: flex-start;
        }

        strong span {
            font-family: 'Noir Pro Regular Italic';
        }

        input {
            padding: 0 10px;
        }

        select { 
            padding: 0 5px;
        }

        input, select {
            width: 100%;
            height: 43px;
        }

        .singleLine {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }

        .singleLine input {
            width: 47.5%;
        }

        input, button, select {
            background: none;
            border: none;
            border-bottom: 1px solid #ffffff;

            color: #ffffff;

            font-family: 'Noir Pro Light';
            color: #ffffff;
            font-size: 16px;
            line-height: 19px;

            option { 
                background: #525252;
                color: #ffffff;
            }

            /* estilizar placeholder abaixo */

            ::placeholder {
                font-family: 'Noir Pro Light';
                color: #ffffff;
                font-size: 16px;
                line-height: 19px;

                opacity: 1;
            }

            :-ms-input-placeholder {
                font-family: 'Noir Pro Light';
                color: #ffffff;

                font-size: 16px;
                line-height: 19px;
            }

            ::-ms-input-placeholder {
                font-family: 'Noir Pro Light';
                color: #ffffff;

                font-size: 16px;
                line-height: 19px;
            }
        }

        button { 
            width: 87px;
            height: 25px;

            font-family: 'Noir Pro Regular';

            align-self: flex-end;
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            font-size: 20px;
            line-height: 24px;

            border: none;

            img { 
                height: 14px;
            }
        }

        input:focus, select:focus {
            background: none;
        }

        /* remove spin buttons from number input */
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none;
            margin: 0; 
        }

        input[type=number] {
            -moz-appearance:textfield; /* Firefox */
        }  
`;