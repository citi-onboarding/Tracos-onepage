import styled from 'styled-components';
import { NoirProSemiBoldWoff, NoirProSemiBoldWoff2, NoirProSemiBoldItalicWoff, NoirProSemiBoldItalicWoff2, NoirProRegularWoff, NoirProRegularWoff2 } from '../../assets/index'

export const Back = styled.div`
    
    width: 100%;
    height: 800px;
    left: 0px;
    top: 90px;
    display: flex;
    justify-content: space-between;
    
    background: #0B0B0B;

    @font-face {
    font-family: 'Noir Pro SemiBold';
    src: url(${NoirProSemiBoldWoff}) format('woff'),
         url(${NoirProSemiBoldWoff2}) format('woff2'); 
  }

  @font-face {
    font-family: 'Noir Pro SemiBoldItalic';
    src: url(${NoirProSemiBoldItalicWoff}) format('woff'),
         url(${NoirProSemiBoldItalicWoff2}) format('woff2'); 
  }

  @font-face {
    font-family: 'Noir Pro Regular';
    src: url(${NoirProRegularWoff}) format('woff'),
         url(${NoirProRegularWoff2}) format('woff2'); 
  }

`;

export const Image = styled.img`
    
    //background: linear-gradient(180deg, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%;
    //mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
   //-webkit-mask-image: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);

    margin: 3.5vh 15vh 0vh 0vh;
    width: 600px;
    height: 700px;
  

`;

export const ImageSeta = styled.img`

    height: 17px;
    width: 15px;
    margin-left: 250px;
    margin-top: 5px;
`;

export const Texts = styled.div`
h1 {

    height: 164px;
    padding-top: 144px;
    padding-left: 140px;
    margin: 0;

    font-family: 'Noir Pro SemiBold';
    font-style: normal;
    font-weight: 600;
    font-size: 68px;
    line-height: 82px;

    color: #FFFFFF;

}

p {

    height: 24px;
    padding-top: 188.5px;
    padding-left: 140px;

    font-family: 'Noir Pro Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;
}

span {
    font-family: 'Noir Pro SemiBoldItalic';
}

`;

export const VideoStyle = styled.video`
    
    position: absolute;
    width: 935px;
    height: 526px;
    margin: 90vh 0vh 0vh 42vh;
    
    
    
`;
