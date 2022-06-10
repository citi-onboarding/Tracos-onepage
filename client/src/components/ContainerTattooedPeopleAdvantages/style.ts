import styled from 'styled-components'; 

export const Container =  styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 180px;
    @media (max-width: 1000px){ 
        display: grid;
        gap: 24px;
    }
`;
