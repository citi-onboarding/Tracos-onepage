import styled from 'styled-components'; 
import { themeTRS } from '../../styles/theme';

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: ${themeTRS.colors.title};
`;

export const Container = styled.div`
    display: flex;
`;

export const Card = styled.div`
    width: 329px;
    height: 350px;

    border: 1px solid #0B0B0B;
    padding: 20px 32px;
    img{
        width: 265px;
        height: 142px;
    }
`;

export const CardImage = styled.img`
    
`;

export const CardTitle = styled.div`
    font-weight: 500;
    color: ${themeTRS.colors.titleCard};
`;

export const CardText = styled.div`
    font-weight: 300;
    color: ${themeTRS.colors.text};
`;