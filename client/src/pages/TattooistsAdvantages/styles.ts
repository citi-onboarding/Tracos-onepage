import styled from 'styled-components';
import { NoirProMediumWoff2, NoirProMediumWoff} from '../../assets/index';

export const Title = styled.div`

 @font-face {
    font-family: 'Noir Pro Medium';
    src: url(${NoirProMediumWoff2}) format('woff2'),
         url(${NoirProMediumWoff}) format('woff'); 
  }

    width: fit-content;
    height: 10vh;

    font-family: 'Noir Pro Medium', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 55px;

    color: #000000;

    @media screen and (max-width: 1000px){
        font-size: 31px;
        height: fit-content;
    
    }

`;

export const Container =  styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100vw;
    height: fit-content;

    @media screen and (max-width: 1000px){
        flex-direction: column;
        align-items: center;
        height: 78vh;
        justify-content: space-between;
    }

`;

export const SectionContainer = styled.div`
    width: 100vw;
    height: calc(10vh + 350px + 160px);
    border-top: 1px solid #0B0B0B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 1000px){
        height: calc(8vh + 900px);
        justify-content: space-evenly;

    }

`;
