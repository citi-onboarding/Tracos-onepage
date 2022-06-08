import styled from 'styled-components'; 

export const Container =  styled.div`
    display: flex;
    justify-content: center;
    gap: 70px;
    margin-top: 56px;
    @media (max-width: 1000px){ 
        display: grid;
        gap: 24px;
    }
`;
