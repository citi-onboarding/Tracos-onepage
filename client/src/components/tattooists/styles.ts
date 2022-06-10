import styled from 'styled-components';
import { NoirProRegularWoff2, NoirProRegularWoff, NoirProMediumWoff2, NoirProMediumWoff, NoirProMediumItalicWoff, NoirProMediumItalicWoff2 } from '../../assets/index'

export const Artists = styled.div`
 @font-face {
    font-family: 'Noir Pro Regular';
    src: url(${NoirProRegularWoff2}) format('woff2'),
         url(${NoirProRegularWoff}) format('woff'); 
  } 
 @font-face {
    font-family: 'Noir Pro Medium';
    src: url(${NoirProMediumWoff2}) format('woff2'),
         url(${NoirProMediumWoff}) format('woff'); 
  } 
 @font-face {
    font-family: 'Noir Pro Medium Italic';
    src: url(${NoirProMediumItalicWoff2}) format('woff2'),
         url(${NoirProMediumItalicWoff}) format('woff'); 
  } 
  margin-top:139px;
  margin-bottom:139px;
  font-family: 'Noir Pro Regular';
  display: grid;
  grid-template-columns: 1.1fr 335px 582px 1.1fr;
  column-gap: 60px;
  grid-template-rows: 2fr 3fr 15.45fr 0.8fr 2fr;
  min-width:1097px;
  max-height:410px;
  .hidden {
    opacity: 0 !important;
  }

  .tattooist {
    opacity: 1;
    grid-column: 2/2;
    grid-row: 1/6;
    width: 100%;
    transition: opacity 0.3s linear;
  }

  #nameAux {
    position: relative;
    top: -33px;
    margin: 0px;
  }

  #ourartists {
    margin: 0px;
    justify-items: flex-end;
    grid-column:3/3;
    grid-row:2/2;
    font-family: 'Noir Pro Medium';
    padding-left: 150px;
    font-size: 44px;
    font-weight: 100;
    color: #0b0b0b;
    white-space: nowrap;
  }

  #ourartists span {
    font-family: 'Noir Pro Medium Italic';
  }

  .arrows {
    display: flex;
    grid-column: 3/3;
    grid-row: 4/4;
    justify-content: space-between;
  }

  .arrow {
    transition: opacity 0.3s linear;
  }

  .inactive {
    opacity: 0.3;
  }

  .active:hover {
    cursor: pointer;
  }

  #prev {
    transform: scaleX(-1);
  }

  @media(max-width: 1000px) {
    margin-top:60px;
    margin-bottom:60px;
    min-width:278px;
    max-height: 608px;
    grid-template-columns: 1fr 278px 1fr;
    grid-template-rows: 42px 283px 210px 13px;
    justify-items:center;
    row-gap:20px;
    column-gap:0px;

    .tattooist {
      max-width:234px;
      grid-row: 2/2;
    }

    .arrows {
      width:234px;
      grid-column: 2/2;
      grid-row: 4/4;
    }

    #ourartists {
      grid-column: 2/2;
      grid-row: 1/1;
      padding-left: 0px;
      font-size: 31px;
      text-align:center;
    }

  }
`;

export const Text = styled.div`
  grid-row: 3/3;
  grid-column: 3/3;

  #name {
    padding-top:2.5em;
  }

  h2 {
    transition: opacity 0.3s linear;
    font-style: normal;
    font-weight: 100;
    font-size: 28px;
    color:black;
  }

  p {
    transition: opacity 0.3s linear;
    margin-top: -25px;
    font-family: "Barlow", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #0B0B0B;
  }

  #description {
    padding-top:1em;
    height:110px;
  }

  #descriptionAux {
    position:relative;
    top:-67px;
    margin-bottom:-60px;
  }

  @media(max-width:1000px) {
    grid-row: 3/3;
    grid-column: 2/2;
    max-width:234px;

    #name {
      padding-top:0px;
    }

    #nameAux {
      top:-29px;
    }

    h2 {
      font-size: 24px;
      margin-top:0px;
    }

    p {
      font-size: 15px;
    }

    #description {
      height:162px;
    }

    #descriptionAux {
      height:162px;
      top:-122px;
    }
  }

`;