import styled from "styled-components";
const lightgrey = "#e6e6e6";
const green = "#36d643";
const almostblack = "#383838";

export const AddCar = styled.div`
    background-color: ${lightgrey};
    display:flex;
    width:500px;
    height:300px;
    justify-content: center;
    align-items: center;
    margin: 10% auto;
    
        @media (max-width: 500px){
            width:100%
        }

`;

export const Input = styled.input`
    border-radius: 5px;
    width:100%;
    height:40px;
`;

export const Span = styled.span`
    color: red;
    font-size: 20px;
`;

export const Button = styled.button`
    border-radius: 15px;
    width: 60px;
    height:40px;
    background-color: ${almostblack};
    color: ${lightgrey};
    border: none;
    transition: all .2s ease-in;
    margin-top: 10px;
    
    &:hover{
        background-color: ${green};
        color: ${almostblack};
        transform: scale(1.05);
    }
`;