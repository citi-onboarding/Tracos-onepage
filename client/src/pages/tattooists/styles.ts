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
  font-family: 'Noir Pro Regular';
  display: grid;
  grid-template-columns: 1.1fr 2.3fr 4.00fr 1.1fr;
  column-gap: 60px;
  grid-template-rows: 2fr 18.45fr 0.8fr 2fr;

  .hidden {
  opacity: 0 !important;
}

.tattooist {
  opacity: 1;
  grid-column: 2/2;
  grid-row: 1/5;
  width: 100%;
  min-width: 335px;
  transition: opacity 0.3s linear;
}

#nameAux {
  position: relative;
  top: -56px;
  margin: 0px;
}

#ourartists {
  margin: 0px;
  justify-items: flex-end;
}

.arrows {
  display: flex;
  grid-column: 3/3;
  grid-row: 3/3;
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

`;

export const Text = styled.div`
 @font-face {
    font-family: 'Noir Pro Medium Italic';
    src: url(${NoirProMediumItalicWoff2}) format('woff2'),
         url(${NoirProMediumItalicWoff}) format('woff'); 
  } 
  grid-row: 2/2;
  grid-column: 3/3;

  span {
    font-family: 'Noir Pro Medium Italic';
  }

  h1 {
  font-family: 'Noir Pro Medium';
  padding-left: 150px;
  font-size: 44px;
  font-weight: 100;
  color: #0b0b0b;
  white-space: nowrap;
}

h2 {
  transition: opacity 0.3s linear;
  font-style: normal;
  font-weight: 100;
  font-size: 28px;
}

p {
  transition: opacity 0.3s linear;
  margin-top: -46px;
  font-family: "Barlow", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #0B0B0B;
}

#descriptionAux {
  position:relative;
  top:-60px;
  margin-bottom:-60px;
}

`;