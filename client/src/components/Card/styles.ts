import styled from 'styled-components'; 

export const CardTitle = styled.h1`
    display:flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-family: 'Barlow', sans-serif;
    font-weight: 500;
    color: #0B0B0B;
    
`;

export const CardDescription = styled.p`
    font-size: 14px;
    font-family: 'Barlow', sans-serif;
    font-weight: 300;
    color: #0B0B0B;
`;

export const CardImage = styled.img`

    @media screen and (max-width: 1000px){
        height: 90px;
        width: 168px;
    }
    
`;

export const Edge = styled.div`

    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 32px;
    gap: 24px;

    width: 329px;
    height: 350px;

    border: 1px solid #0B0B0B;

    :hover{
        background-color: black;
        
    }
    :hover h1{
        color: white;
    }
    :hover p{
        color: white;
    }

    :hover span{
        background-color: white;
    }

    :hover img{
        filter: invert(1); 
    }

    @media screen and (max-width: 1000px){
        width: 234px;
        height: 248.94px;

        h1{
            font-size: 15.6514px;
        }

        p{
            font-size: 11px;
        }
    }
    
`;

export const LineTitle = styled.span`
    background-color: black;
    width: 24px;
    height: 1.1px;

    @media screen and (max-width: 1000px){
        width: 17px;
    }

`;

